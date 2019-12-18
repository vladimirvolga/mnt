<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div>


        <div class="test-square_20px" @click = 'testCallAction'>

            <!--   ...    -->

        </div>

        <div class="testfont"> ТЕСТ ТЕКСТА </div>


    </div>



</template>





<script>





    export default {


        name: "TestStoreComponent",

        computed: {
            getTestVariableFromStore () {
                return this.$store.getters.GET_TEST_VARIABLE_VALUE
            },

        },

        methods: {

            getTestVariable() {
                console.log('Печать значения тестовой переменной:   ' +
                    this.$store.getters.GET_TEST_VARIABLE_VALUE)
            },

            testPrint() {
                console.log('Тестовая печать. Проверка функций')
            },

            testCallAction() {
                this.$store.dispatch('testPrint')
            }

        },




    }




</script>





<style scoped lang="sass">




    /**   РАСКОММЕНТИРОВАТЬ ИМПОРТЫ   */

    @import '../../sass/main'



    /*   ---   СЛУЖЕБНЫЕ КЛАССЫ   ----   */


    .test-square_20px

        width: 20px
        height: 20px

        margin: 10px

        background-color: #FFC8C8

        border: 1px solid #f11417


    .testfont

        font-family: "Roboto", sans-serif !important
        font-weight: 300

        /*color: #f11417*/
        color: $blue-153



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
