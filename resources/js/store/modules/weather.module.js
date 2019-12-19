import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *          ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *      В индексном файле:
 *      1. Сделать импорт
 *      2. Зарегистрировать в блоке modules {...}
 *      3. СДЕЛАТЬ ПОМЕТКУ С КАКИМ ФАЙЛОМ СВЯЗАН ПРЕИМУЩЕСТВЕННО
 *          ЭТОТ ФАЙЛ.
 */



/**         ---   S T A T E   ---         */


const state = {

    deviceData: '',
    temperatureData: [],
    pressureData: [],
    humidityData: [],

    sensorsData: [],

    requestTime: 0,

    respImmitation: {"id":7968,"mac":"","name":"ESP8266 Esp-12","my":0,"owner":"1925","location":"Ульяновск, ул.Ефремова, 145","distance":643.72,"liked":1,"uptime":50,"sensors":[

        {"id":4443,"mac":"","fav":0,"pub":1,"type":3,"name":"Давление (BMP180)","value":759.39,"unit":"mmHg","time":1574854992,"changed":1574854992,"trend":0},
        {"id":22970,"mac":"","fav":0,"pub":1,"type":1,"name":"Улица","value":-6.4,"unit":"°","time":1574854992,"changed":1574854392,"trend":0},
        {"id":22971,"mac":"","fav":0,"pub":1,"type":4,"name":"Улица 04","value":999,"unit":"°","time":1574854992,"changed":1574854392,"trend":0},
        {"id":22971,"mac":"","fav":0,"pub":1,"type":1,"name":"Улица 02","value":-8.3,"unit":"°","time":1574854992,"changed":1574854392,"trend":0}

            ]}

};



/**         ---     M   U   T   A   T   I   O   N   S     ---         */


const mutations = {


    /**         ...   test group of mutations   ...         */


    SET_DEVICE_DATA (state, deviceData) {
        state.deviceData = deviceData
    },


    CLEAR_DEVICE_DATA (state) {
        state.deviceData = ''
    },


    SET_TEMPERATURE_DATA (state, temperatureData) {

        let data = temperatureData

        let unixTime = data.time

        let date = new Date(unixTime*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime
        formattedTime = hours + ':' + minutes.substr(-2);
        data.time = formattedTime

        let unixChanged = data.changed

        date = new Date(unixChanged*1000);
        hours = date.getHours();
        minutes = "0" + date.getMinutes();
        let formattedChanged
        formattedChanged = hours + ':' + minutes.substr(-2);
        data.changed = formattedChanged

        state.temperatureData.push(data)

    },


    CLEAR_TEMPERATURE_DATA (state) {
      state.temperatureData =[]
    },


    SET_PRESSURE_DATA (state, pressureData) {

        let data = pressureData

        let unixTime = data.time

        let date = new Date(unixTime*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime
        formattedTime = hours + ':' + minutes.substr(-2);
        data.time = formattedTime

        let unixChanged = data.changed

        date = new Date(unixChanged*1000);
        hours = date.getHours();
        minutes = "0" + date.getMinutes();
        let formattedChanged
        formattedChanged = hours + ':' + minutes.substr(-2);
        data.changed = formattedChanged

        state.pressureData.push(data)

    },


    CLEAR_PRESSURE_DATA(state) {
        state.pressureData = []
    },


    SET_HUMIDITY_DATA (state, humidityData) {

        let data = humidityData

        let unixTime = data.time

        let date = new Date(unixTime*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime
        formattedTime = hours + ':' + minutes.substr(-2);
        data.time = formattedTime

        let unixChanged = data.changed

        date = new Date(unixChanged*1000);
        hours = date.getHours();
        minutes = "0" + date.getMinutes();
        let formattedChanged
        formattedChanged = hours + ':' + minutes.substr(-2);
        data.changed = formattedChanged

        state.humidityData.push(data)

    },


    CLEAR_HUMIDITY_DATA (state) {
        state.humidityData = []
    },


    SET_SENSORS_DATA (state, sensor) {

        let data = sensor

        let unixTime = data.time

        let date = new Date(unixTime*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime
        formattedTime = hours + ':' + minutes.substr(-2);
        data.time = formattedTime

        let unixChanged = data.changed

        date = new Date(unixChanged*1000);
        hours = date.getHours();
        minutes = "0" + date.getMinutes();
        let formattedChanged
        formattedChanged = hours + ':' + minutes.substr(-2);
        data.changed = formattedChanged

        state.sensorsData.push(data)
        // console.log(data)

    },


    SORT_SENSORS_DATA(state) {

        let sensorsData = state.sensorsData
        sensorsData.sort(function(obj1,obj2){
            return obj1.type-obj2.type
        })

    },


    CLEAR_SENSORS_DATA (state) {
        state.sensorsData = []
    },


    SET_REQUEST_TIME (state, requestTime) {
        state.requestTime = requestTime
    },




};



/**         ---     A   C   T   I   O   N   S     ---         */


const actions = {


    /*   !!!!!!!!!!!!!
    * обязательно проверить зарешистрирован ли модуль
    *  в index.js
    *
    **/



    /**         ...   ВЫПОЛНЕНИЕ МУТАЦИЙ   ...            */


    // set_deviceId({ commit }, deviceId) {
    //
    //     commit('SET_DEVICE_ID')
    //         console.log(state.deviceId)
    //
    // },



    /**         ...   ДРУГИЕ ЭКШЕНЫ   ...            */


    checkBlockPosition() {

        let element = document.getElementsByClassName('device-block')[0]
        let elementHeight = element.offsetHeight
        // let elementHeight = window.getComputedStyle(element, null).height;

        let windowHeight = document.documentElement.clientHeight
        let wrapper = document.getElementsByClassName('main')[0]

        if (elementHeight > windowHeight) {

            wrapper.classList.add("main-top")

        } else {

            wrapper.classList.remove("main-top")

        }

    },


    testTimeFunction() {

        let date =  new Date()
        let utc = date.getTime()
        let utcSeconds = Math.round(date.getTime()/1000)


    },


    convertUnixTime() {
        let uts = 1574921672;
        // let uts = state.unixTime

        let date = new Date(uts*1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        // let seconds = "0" + date.getSeconds();

        // let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        let formattedTime = hours + ':' + minutes.substr(-2);

        console.log(formattedTime)
    },


    testGetCurrentTime({ commit, dispatch }) {

        let unixTime = 1574921672
        commit ('SET_UNIX_TIME', unixTime)
        dispatch('convertUnixTime')

    },


    deviceDataRequest({dispatch, commit}) {

        let date =  new Date()
        let requestTime = Math.round(date.getTime()/1000)

        if ((requestTime - state.requestTime)>1) {

        axios({ url: '/api/test', method: 'POST' })

            .then(resp => {

                commit('SET_REQUEST_TIME', requestTime)

                commit('CLEAR_SENSORS_DATA')


                /*------*/

                let deviceData = resp.data
                // let deviceData = state.respImmitation

                /*------*/


                commit('SET_DEVICE_DATA', deviceData)

                let sensorsArr = deviceData.sensors
                let sensorsArrLength = sensorsArr.length
                let sensorsNumber = 0

                while (sensorsNumber < sensorsArrLength) {

                    let sensor = sensorsArr[sensorsNumber]
                    commit('SET_SENSORS_DATA', sensor)
                    sensorsNumber++

                }

                commit ('SORT_SENSORS_DATA')

            })

            .catch(error => console.log(error))

        }

    },


    //    Вызов одного  экшена из другого

    // testFunction({ dispatch }) {
    //     dispatch('testPrint')
    // }

};




/**         ---     G   E   T   T   E   R   S     ---         */



const getters = {



    /**         ...     COMMON     ...            */


    get_deviceData (state) {
        return state.deviceData
    },



    /**         ---     TEMPERATURE     ---         */
    

    get_temperatureData(state) {
        return state.temperatureData
    },



    /**         ---     PRESSURE     ---         */


    get_pressureData(state) {
        return state.pressureData
    },



    /**         ---     HUMIDITY     ---         */


    get_humidityData(state) {
        return state.humidityData
    },



    /**         ---     SENSORS     ---         */


    get_sensorsData(state) {
        return state.sensorsData
    },



};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}