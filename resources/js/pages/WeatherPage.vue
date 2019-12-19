<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div class="sw_XC-YC">
    <!--<div class="page-container">-->


        <!--<div class="test-square_20px">-->

            <!--WP-->

        <!--</div>-->

        <weather-component></weather-component>


    </div>



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "WeatherPage",

        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // }

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


    .page-container

        display: flex
        flex-direction: row

        width: 100%
        height: 100%





    /*   ---   СЛУЖЕБНЫЕ КЛАССЫ   ----   */


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








