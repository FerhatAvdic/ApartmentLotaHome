<template>
  <div id="Slider">
    <h1 class="header">{{vmText.title}}</h1>
    <p class="paragraph">{{vmText.description}}</p>
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
            hr: 'Molestiae voluptatem ut earum dolor voluptatem maxime et voluptas eaque. Natus illum porro. Quis fugit deleniti odit. Mollitia voluptatem asperiores.Voluptatem blanditiis eum fugit ut harum. Qui earum ut officia. Quo debitis soluta minus magnam et dolores ad quae. Ea recusandae labore dolores alias.Hrvatski',
            en: 'Molestiae voluptatem ut earum dolor voluptatem maxime et voluptas eaque. Natus illum porro. Quis fugit deleniti odit. Mollitia voluptatem asperiores.Voluptatem blanditiis eum fugit ut harum. Qui earum ut officia. Quo debitis soluta minus magnam et dolores ad quae. Ea recusandae labore dolores alias.Engleski',
            ge: 'Molestiae voluptatem ut earum dolor voluptatem maxime et voluptas eaque. Natus illum porro. Quis fugit deleniti odit. Mollitia voluptatem asperiores.Voluptatem blanditiis eum fugit ut harum. Qui earum ut officia. Quo debitis soluta minus magnam et dolores ad quae. Ea recusandae labore dolores alias.Njemački'
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #d83155;
  /*background-image: url('../assets/images/rovinj.jpg');*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: top;
  /*width: 100%;
  height: 430px;*/
}
.header{
  padding: 10px 0;
  font-size: 36px;
  width:100%;
  text-align:left;
}
.paragraph{
  padding: 10px 0;
  margin: 0;
  font-size: 16px;
}

.header, .paragraph{
  width:50%;
}
</style>
