<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div class="sw_XC-YC">
    <!--<div class="main">-->


        <!--<div class="test-square_20px">-->

            <!--&lt;!&ndash;   ...   &ndash;&gt;-->

        <!--</div>-->

        <lists-component></lists-component>


    </div>



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "ListsPage",

        // data() {
        //
        //     return {
        //
        //         omeArray: [
        //
        //             {
        //                 "type" : "1",
        //                 "name" : "Улица",
        //                 "value" : "-6.4",
        //             },
        //
        //             {
        //                 "type" : "1",
        //                 "name" : "Улица 2",
        //                 "value" : "-7.2",
        //             },
        //
        //         ],
        //
        //         someVariable: false
        //
        //     }
        //
        // },

        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // },

        },

        // mounted: function () {
        //     console.log('Закомментировать функцию в разделе *** MOUNTED ***')
        // },
        //
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


    .main-container

        width: 100%
        max-width: 300px



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