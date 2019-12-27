
import Home from '../components/Home'
import TestStorePage from '../pages/TestStorePage'
import WeatherPage from '../pages/WeatherPage'
import ListsPage from '../pages/ListsPage'



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

    {
        path: '/listspage',
        name: 'listspage',
        component: ListsPage,
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