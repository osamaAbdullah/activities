import {createRouter, createWebHistory} from 'vue-router'
import {auth} from "./firebase";
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
        meta: {auth: true},
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
        meta: {auth: true, role: 'admin'},
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
        path: '/402',
        name: 'Unauthorized',
        component: () => import('./views/errors/402.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

auth.onAuthStateChanged( (user) => {
    if (user === null) {
        store.commit('setUser', {authenticated: false})
        // router.replace({name: 'Login'})
    }
    else {
        store.commit('setUser', {
            authenticated: true,
            email: user.email,
            uid: user.uid,
            role: 'admin',
        })
        // await router.replace({name: 'Home'})
    }
})

router.beforeEach((to, from, next) => {
    console.log(to.fullPath)
    //only admin should see this page
    if (to.matched.some(record => record.meta.role === 'admin')) {
        store.getters.user.role === 'admin' ? next() : next({name: 'Unauthorized'})
        // must be authenticated to see this page
    } else if (to.matched.some(record => record.meta.auth)) {
        store.getters.user.authenticated ? next() : next({name: 'Login'})
    } else {
        next()
    }
});



export default router
