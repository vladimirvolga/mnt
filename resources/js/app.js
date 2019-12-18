require('./bootstrap');

import Vue from 'vue'




    /*         ---   РЕГИСТРИРУЕМ КОМПОНЕТЫ   ---         */


Vue.component('test-store-component', require('./components/TestStoreComponent.vue').default);
Vue.component('weather-component', require('./components/WeatherComponent.vue').default);





    /*         ---   ИМПОРТ APP   ---         */


import App from './components/App'





    /*         ---   ИМПОРТ VUEX   ---         */


import store from './store'





    /*         ---   ИМПОРТ ШРИФТОВ   ---         */


import '../sass/fonts.scss'





    /*         ---   ИМПОРТ VUE-ROUTER   ---         */


import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
});






    /*----------------------------------------------------*/


const app = new Vue({
    el: '#app',
    components: { App },
    store,
    router,

});