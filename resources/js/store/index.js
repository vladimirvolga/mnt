
        //  ИМПОРТИРКУЕМ VUE И VUEX


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)





        //  ИМПОРТИРУЕМ МОДУЛИ


import testStoreModule from './modules/test.store.module'
import weatherModule from './modules/weather.module'
import weatherPageModule from './modules/weather.page.module'
import listsModule from './modules/lists.module'





        //  СОЗДАЕМ STORE


const store = new Vuex.Store ({

    modules: {

        testStoreModule,
        weatherModule,
        weatherPageModule,
        listsModule,

    }

})





        //  ЭКСОПРТИРУЕМ STORE

export default store



