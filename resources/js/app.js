require('./bootstrap');


import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue'
import Login from './components/Login.vue'

// Importar Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

// Importar y configuración vue router
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
window.Vue.use(ElementUI);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

const login = new Vue({
    el: '#login',
    router: router,
    render: h => h(Login)
});


