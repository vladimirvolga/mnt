import Vue from 'vue'
import Vuex from 'vuex'

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

    testVariable: 'Значение в тестовой переменной testVariable ',

    testArray: [

        { name: "angular", id:0, sortIndex:0 },
        { name: "react", id:1, sortIndex:1 },
        { name: "vue", id:2, sortIndex:2 },
        { name: "html", id:3, sortIndex:3 },
        { name: "css", id:4, sortIndex:4 },
        { name: "sass", id:5, sortIndex:5 },

    ],

    testArray_02: [

        { name: "angular", id:0, sortIndex:0 },
        { name: "react", id:1, sortIndex:1 },
        { name: "vue", id:2, sortIndex:2 },
        { name: "html", id:3, sortIndex:3 },
        { name: "css", id:4, sortIndex:4 },
        { name: "sass", id:5, sortIndex:5 },

    ]

};



/**         ---     M   U   T   A   T   I   O   N   S     ---         */


const mutations = {


    /**         ...   test group of mutations   ...         */


    SET_SORT_INDEX (state, {elementId, sortIndex}) {

        let arr = state.testArray_02
        let arrLength = arr.length
        let elementNumber = 0

            // console.log('sortIndex        ' + sortIndex)
            // console.log('elementId        ' + elementId)



        while (elementNumber < arrLength) {
        //
            if (arr[elementNumber].id = elementId) {
        //
                arr[elementNumber].sortIndex = sortIndex
        //
                    console.log('arr[elementNumber].id' + arr[elementNumber].id )
                    console.log('arr[elementNumber].sortIndex' + arr[elementNumber]
                        .sortIndex )
        //
                    console.log(state.testArray_02)
            }
        //

            elementNumber ++
        //
        }


    },




    /**         ...   test group of mutations 2   ...         */


    // SET_TEST_VARIABLE_2 (state) {
    //
    //     state.testVariable = 'тестовый текст для перменной 2'
    //
    // },

};



/**         ---     A   C   T   I   O   N   S     ---         */


const actions = {


    /*   !!!!!!!!!!!!!
    * обязательно проверить зарешистрирован ли модуль
    *  в index.js
    *
    **/



    /**         ...   ВЫПОЛНЕНИЕ МУТАЦИЙ   ...            */


    setSortIndex({ commit }, evt) {

        // console.log(evt)

        let i = 0
        let elementAmount = evt.from.children.length

        while (i < elementAmount) {

            let elementId = evt.from.children[i].id
            // let elementOldIndex = evt.oldIndex
            let sortIndex = i

                console.log('elementId   ' + elementId + ',   ' +
                    // 'elementOldIndex   ' + elementOldIndex + ',   ' +
                    'sortIndex   ' + sortIndex)


            commit('SET_SORT_INDEX', {sortIndex, elementId})

            i++

        }

            console.log(evt)
            console.log(evt.from.children)
            console.log(evt.from.children.length)




        // commit('SET_SORT_INDEX', id, sortIndex)

    },



    /**         ...   ДРУГИЕ ЭКШЕНЫ   ...            */


    //    Тестовая функция для вызова из другого экшена

    // testPrint () {
    //     console.log ('вызов экшена из другого')
    // },


    //    Вызов одного  экшена из другого

    // testFunction({ dispatch }) {
    //     dispatch('testPrint')
    // }

    printTestVariable () {
      console.log(state.testVariable)
    },

};




/**         ---     G   E   T   T   E   R   S     ---         */



const getters = {



            /**         ...   test group of getters   ...            */


    get_testVariable(state) {
        return state.testVariable
    },

    get_testArray(state) {
        return state.testArray
    },

};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}