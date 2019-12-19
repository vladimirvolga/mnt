<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div class="main">
    <!--<div class="main main-top">-->

        <div class="device-block">




                <div class="device " v-if="device.length !== 0">


                    <div class="sw_w100pr">

                        <div class="device__name sw_w100pr">{{device.name}}</div>
                        <div class="device__address sw_w100pr">{{device.location}}</div>

                    </div>


                </div>




            <!--                 ДАТЧИКИ ВСЕ ВМЕСТЕ                   -->



                <div class="sensors-block" v-if="sensors.length !==0"
                     @click="weatherRequest">


                    <div class="sw_w100pr">

                        <div class="sensor__type">Датчики</div>



                        <!---->

                        <template v-for="sensor in sensors">


                            <div class="sensor">


                                <div class="sensor__title sw_w100pr">

                                    <div class="sensor__name ">{{sensor.name}}</div>
                                    <div class="sensor__update-time ">{{sensor.time}}</div>

                                </div>


                                <div class="sw_dF-fdR-xL-yT sw_w100pr">

                                    <div class="sensor__reading sw_dF-fdR-xL-yC">

                                        <div class="sw_dF-fdR-xL-yT">

                                            <p class="sensor__value ">{{sensor.value}}</p>
                                            <p class="sensor__unit ">{{sensor.unit}}</p>

                                        </div>

                                    </div>

                                </div>



                            </div>


                        </template>

                        <!---->




                    </div>


                </div>





            <!--<button class="button" @click = 'weatherRequest'>-->
                <!--Запрос погоды</button>-->
            <!--<button class="button" @click = 'checkBlockPosition'>-->
                <!--высота эл</button>-->





            <!--<div class="cont sw_border-visible sw_dF-fdR-xR-yC">-->

                <!--<div class="sw_test-sq20px-pink"></div>-->
                <!--<div class="sw_test-sq20px-pink"></div>-->

            <!--</div>-->





        </div>

    </div>



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "WeatherComponent",

        methods: {

            weatherRequest() {
                this.$store.dispatch('deviceDataRequest')
            },

            testTimeFunction() {
                this.$store.dispatch('testTimeFunction')
            },

            checkBlockPosition() {
                this.$store.dispatch('checkBlockPosition')
            },

        },

        computed: {

            device() {
                return this.$store.getters.get_deviceData
            },

            sensors() {
                return this.$store.getters.get_sensorsData
            },

        },

        mounted: function () {
            this.$store.dispatch('deviceDataRequest')
            // this.$store.dispatch('checkBlockPosition')
        },


        updated: function () {
            this.$store.dispatch('checkBlockPosition')
        },


        // created: function () {
        //
        //     console.log('Закомментировать функцию в разделе *** CREATED ***')
        //
        // },


    }




</script>





<style scoped lang="sass">


    @import '../../sass/main'




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


    .main-top

        display: flex
        flex-direction: row

        justify-content: center
        /*align-items: center*/
        align-items: flex-start

        /*align-content: center*/
        /*align-content: flex-start*/

        width: 100%


    .device-block

        display: flex
        flex-direction: column

        width: 100%
        max-width: 300px


    .device

        display: flex
        flex-direction: row

        /*width: 100%*/
        max-width: 300px
        /*min-height: 300px*/

        margin-top: 12px
        margin-left: 12px
        margin-right: 12px

        padding: 12px

        background-color: #2a2a2a



    .sensors-block

        display: flex
        flex-direction: row

        /*width: 100%*/
        max-width: 300px
        /*min-height: 300px*/

        margin-top: 12px
        margin-left: 12px
        margin-right: 12px

        padding-left: 12px
        padding-right: 12px

        background-color: #2a2a2a

        cursor: pointer




    .device__name

        display: flex
        flex-direction: row
        align-items: center

        /*height: 30px*/

        font-family: Helvetica, sans-serif
        font-size: 12px
        font-weight: 700

        text-transform: uppercase

        background-color: #272727

        color: #8b8b8b


    .device__address

        display: flex
        flex-direction: row
        align-items: center

        margin-top: 6px

        font-family: Helvetica, sans-serif
        font-size: 14px
        font-weight: 400

        background-color: #272727

        color: #8b8b8b


    .sensor__reading

        display: flex
        flex-direction: row

        min-height: 120px


    .sensor__type

        display: flex
        flex-direction: row
        align-items: center

        height: 30px

        font-family: Helvetica, sans-serif
        font-size: 12px
        font-weight: 700

        text-transform: uppercase

        background-color: #272727

        color: #8b8b8b


    .sensor

        min-height: 60px



    .sensor__title

        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between


        height: 30px


    .sensor__name

        font-family: Helvetica, sans-serif
        font-size: 14px
        font-weight: 400

        color: #8b8b8b


    .sensor__update-time

        font-family: Helvetica, sans-serif
        font-size: 14px
        font-weight: 400

        color: #8b8b8b


    .sensor__value

        margin-top: 0
        margin-bottom: 0

        font-family: "Helvetica", sans-serif
        font-weight: 100
        font-size: 50px

        color: #8b8b8b


    .sensor__unit

        font-family: "Helvetica", sans-serif
        font-weight: 300
        font-size: 10px

        margin-left: 12px
        margin-top: 16px

        color: #8b8b8b


    .button

        width: 150px
        height: 45px

        background-color: #FFC8C8

        border: 1px solid #f11417

        margin: 12px


        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 14px

        color: #f11417


    .cont

        width: 100%
        height: 400px



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