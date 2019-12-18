
import Home from '../components/Home'
import TestStorePage from '../pages/TestStorePage'
import WeatherPage from '../pages/WeatherPage'

// import Auth from '../pages/AuthPage'
// import Search from '../pages/SearchPage'
// import Notfound from '../pages/404Page'
// import Registr from '../pages/RegistrPage'
// import Test from '../pages/TestPage'
// import UsersIndex from '../pages/UsersIndexconst ifNotAuthenticated = (to, from, next) => {
// //     if (!store.getters.isLoggedIn) {
// //         next()
// //         return
// //     }
// //     next('/egrn')
// // }
// //
// // const ifAuthenticated = (to, from, next) => {
// //     if (store.getters.isLoggedIn) {
// //         next()
// //         return
// //     }
// //     next('/')
// // }'
// import SearchEGRN from '../pages/SearchEGRNPage'
// import SearchMyDocuments from '../pages/SearchMyDocumentsPage'
// import SearchPeople from '../pages/SearchPeoplePage'


// import store from '../store' // your vuex store

//



const routes = [

    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    // },

    {
        path: '/teststorepage',
        name: 'teststorepage',
        component: TestStorePage,
    },

    {
        path: '/',
        name: 'weather',
        component: WeatherPage,
    },



    //
    // {
    //     path: '/people',
    //     name: 'people',
    //     component: SearchPeople,
    //     // beforeEnter: ifAuthenticated,
    // },
    //
    // {
    //     path: '/registr',
    //     name: 'registr',
    //     component: Registr
    // },
    //
    // {
    //     path: '/search',
    //     name: 'search',
    //     component: Search,
    // },
    //
    // {
    //     path: '*',
    //     name: 'notfound',
    //     component: Notfound,
    // },

    //
    // {
    //     path: '/users',
    //     name: 'users.index',
    //     component: UsersIndex,
    // },
    //
    // {
    //     path: '/egrn',
    //     name: 'egrn',
    //     component: SearchEGRN,
    //     beforeEnter: ifAuthenticated,
    // },
    //
    // {
    //     path: '/mydocuments',
    //     name: 'mydocuments',
    //     component: SearchMyDocuments,
    // },




];

export default routes;