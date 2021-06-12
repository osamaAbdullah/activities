import {createRouter, createWebHistory} from 'vue-router'
import {auth, db} from "./firebase";
import {store} from "./vuex";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
        meta: {auth: true},
    },
    {
        path: '/checking',
        name: 'Splash',
        component: () => import('./views/auth/Splash.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('./views/Users.vue'),
        meta: {auth: true, role: 'admin'},
    },
    {
        path: '/activities',
        name: 'Activities',
        component: () => import('./views/Activities.vue'),
        meta: {auth: true},
    },
    {
        path: '/activities-manager',
        name: 'ActivitiesManager',
        component: () => import('./views/ActivitiesManager.vue'),
        meta: {auth: true, role: 'admin'},
    },
    {
        path: '/tasks/daily/missed-activities',
        name: 'DailyMissedActivities',
        component: () => import('./views/tasks/DailyMissedActivities.vue'),
        meta: {auth: true},
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./views/auth/Register.vue'),
    },
    {
        path: '/pending',
        name: 'Pending',
        component: () => import('./views/errors/pending.vue'),
    },
    {
        path: '/blocked',
        name: 'Blocked',
        component: () => import('./views/errors/blocked.vue'),
    },
    {
        path: '/402',
        name: 'Unauthorized',
        component: () => import('./views/errors/402.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

auth.onAuthStateChanged((user) => {
    if (user === null) {
        store.commit('setUser', {authenticated: false})
        router.push({name: 'Login'})
    } else {
        db.doc('users/' + user.uid).get()
            .then(user => user.data())
            .then(USER => {
                store.commit('setUser', {
                    authenticated: true,
                    email: user.email,
                    uid: user.uid,
                    role: USER.role,
                    name: USER.name,
                    status: USER.status,
                })
                router.push({name: 'Home'})
            })
    }
})

router.beforeEach((to, from, next) => {

    const user = store.getters.user

    if (['/pending', '/blocked', '/402'].includes(to.fullPath)) return next()

    if (user.status === 'pending') return next({name: 'Pending'})
    else if (user.status === 'blocked') return next({name: 'Blocked'})

    //only admin should see this page
    if (to.matched.some(record => record.meta.role === 'admin')) return user.role === 'admin' ? next() : next({name: 'Unauthorized'})

    // must be authenticated to see this page
    else if (to.matched.some(record => record.meta.auth)) return user.authenticated ? next() : next({name: 'Login'})

    return next()
});

export default router
