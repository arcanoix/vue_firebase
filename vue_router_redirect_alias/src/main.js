import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
