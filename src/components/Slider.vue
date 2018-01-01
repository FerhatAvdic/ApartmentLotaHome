<template>
  <div id="Slider">
    <img class="logo" src="../assets/images/lota-logo.svg">
    <h1>{{vmText.title}}</h1>
    <p>{{vmText.description}}</p>
  </div>
</template>

<script>
import filterDataByLocale from './filterDataByLocale'



export default {
  id: '#Slider',
  name: 'Slider',
  data () {
    return {
      //object to be extended by only one locale
      vmText: {},
      //object with all locales
      text: {
        title: {
            hr: 'Hrvatski',
            en: 'Engleski',
            ge: 'Njemački'
        },
        description: {
            hr: 'Hrvatski',
            en: 'Engleski',
            ge: 'Njemački'
        }
      }
    }
  },
  created() {
      this.vmText = filterDataByLocale(this.text, this.$route.params.localeId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Slider{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
  background: #dddddd;
  background-image: url('../assets/images/rovinj.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: top;
  /*width: 100%;
  height: 430px;*/
}
.logo{
  width: 230px;
  margin-top: 35px;
}
</style>
