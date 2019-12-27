<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->


    <!--<div class="main">-->
    <div class="sw_dF-fdR-xC-yC sw_w100pr">

        <!--<div class="list-block">-->
        <div class="">

            <!--<div class="list">-->
            <div class="">


            <!--<div class="test-square_20px" @click="printTestVariable">-->

                <!--&lt;!&ndash;   ...   &ndash;&gt;-->

            <!--</div>-->

                <!--<div class=" list-container sw_dF-fdC-xL-yT">-->
                <div class="">

                    <draggable v-model="myArray" ghost-class="ghost" @end="onEnd">
                        <transition-group type="transition" name="flip-list">

                            <div class="sortable"
                                 :id="element.id" v-for="element in myArray" :key="element.id">

                                <!--<strong>{{element.name}}</strong>-->
                                <!--<span>{{element.id}}</span>-->

                                <div>{{element.name}}</div>
                                <div>{{element.id}}</div>

                            </div>

                        </transition-group>
                    </draggable>

                    <!--<p><strong>previous index:</strong>{{oldIndex}}</p>-->
                    <!--<p><strong>new index:</strong>{{newIndex}}</p>-->

                </div>

            </div>


        </div>

    </div>



</template>





<script>

    import draggable from 'vuedraggable'



    export default {

        components: {
            draggable
        },


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "ListsComponent",


        data() {

            return {

                myArray: []
                // myArray: [
                //
                //     { name: "angular", id:0 },
                //     { name: "react", id:1 },
                //     { name: "vue", id:2 },
                //     { name: "html", id:3 },
                //     { name: "css", id:4 },
                //     { name: "sass", id:5 },
                //
                // ],

                // myArray: this.$store.getters.get_testArray,

                // oldIndex: '',
                // newIndex: '',

            }

        },


        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // },

            printTestVariable () {
              this.$store.dispatch('printTestVariable')
            },

            onEnd: function(evt) {

                // const eData = evt;
                // console.log(eData);

                // let i = 300

                this.$store.dispatch('setSortIndex', evt)




                this.oldIndex = evt.oldIndex
                this.newIndex = evt.newIndex

                // this.$store.dispatch('setSortIndex')
            },

        },

        // mounted: function () {
        created: function () {

            // return {
                this.myArray = this.$store.getters.get_testArray
            // }
        },
        //
        // updated: function () {
        //
        //     return {
        //         myArray: this.$store.getters.get_testArray,
        //     }
        // },


        // created: function () {
        //
        //     console.log('Закомментировать функцию в разделе *** CREATED ***')
        //
        // },


    }




</script>





<style scoped lang="sass">




    /**   РАСКОММЕНТИРОВАТЬ ИМПОРТЫ   */


    @import '../../sass/main'



    /*   ---   СЛУЖЕБНЫЕ КЛАССЫ   ----   */





    .main

        /*выравнивает по верху*/

        display: flex
        flex-direction: row

        justify-content: center
        align-items: center
        /*align-items: flex-start*/

        /*align-content: center*/
        /*align-content: flex-start*/

        width: 100%



    .list-block

        display: flex
        flex-direction: column

        width: 100%
        max-width: 300px



    .list

        display: flex
        flex-direction: row

        /*width: 100%*/
        max-width: 300px
        /*min-height: 300px*/

        margin-top: 12px
        margin-left: 12px
        margin-right: 12px

        padding: 12px

        /*background-color: #2a2a2a*/


    .item

        display: flex
        flex-direction: row
        justify-content: space-between

        width: 100%

    .main-container

        width: 100%
        max-width: 300px



    .list-container

        width: 100%
        max-width: 300px




    .sortable

        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center

        width: 300px
        height: 40px

        margin-top: 10px
        padding-left: 10px
        padding-right: 10px

        font-family: Helvetica, sans-serif
        font-size: 12px
        font-weight: 700

        border: 1px solid #e1e1e1
        background-color: #fcfcfc


    .test-square_20px

        width: 20px
        height: 20px

        margin: 10px

        background-color: #FFC8C8

        border: 1px solid #f11417



        .some-class-01

            margin-left: 24px


        .some-class-01_extended

            @extend .some-class-01

            margin-left: 12px



        .some-class-02

            margin-left: 24px


        @media (max-width: 576px)

            .some-class-02

                margin-left: 12px




</style>