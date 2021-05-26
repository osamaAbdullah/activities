import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {store} from "./vuex";
import './assets/index.css'
import mixins from "./mixins";


createApp(App)
    .use(router)
    .use(store)
    .mixin(mixins)
    .mount('#app')
