import {createStore} from "vuex";

export const store = createStore({
    state: {
        user: false,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setUser(state, payload) {
            state.user = payload
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    },
})


