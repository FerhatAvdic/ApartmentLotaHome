<template>
        <weather
        api-key="8a7cb786296f8468fa6d0c9eb07ce2e9"
        title="Kostrena Weather"
        latitude="45.2999988"
        longitude="14.499998"
        language="en"
        units="si"
        bar-color="white"
        text-color="White"
        hide-header>
    </weather>
</template>

<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    components: {
        'weather': VueWeatherWidget
    },
    data(){
        return{
            hideHeader:true
        }
    }
}
</script>

<style scoped>
/*#Weather-wrapper{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color:#333;
    color:white;
    height:100%;
}*/

/*.fe_container .fe_daily{
    display: flex;
    align-items:top;
    justify-content: center;
}
.fe_container .fe_temp_bar{
    top:15px;
}*/

</style>
