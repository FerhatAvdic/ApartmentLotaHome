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
            hr: 'Dobro došli',
            en: 'Welcome',
            de: 'Willkommen'
        },
        description: {
            hr: 'Naš objekat se objekt nalazi na 12 minuta hoda od plaže u Kostreni - u Primorsko-Goranskoj županiji. Apartman Lota posjeduje potpuno opremnjenu kuhinju, jednu spavaću sobu, toalet. Gosti imaju besplatan WiFi, satelitsku antenu, TV. Također se možete opustiti u dvorištu ispred apartmana. Opatija je udaljena 17 km dok je grad Rijeka 7 km od mjesta apartmana. Riječka zračna luka je na 9 km udaljenosti.',
            en: 'Our facility is located at a 12-minute walk from the beach in Kostrena - in the Primorje-Goranska County. Apartment Lota has a fully equipped kitchen, one bedroom, a toilet. Guests have free WiFi, satellite dish, TV. You can also relax in the yard in front of the apartment. Opatija is 17 km away while the town of Rijeka 7 km from the apartment. Rijeka Airport is 9 km away.',
            de: 'Unsere Anlage befindet sich 12 Gehminuten vom Strand in Kostrena - in der Region Primorje-Goranska. Apartment Lota verfügt über eine voll ausgestattete Küche, ein Schlafzimmer, eine Toilette. Zur Ausstattung gehören kostenloses WLAN, eine Satelliten-TV und ein TV. Sie können auch auf dem Hof vor dem Apartment entspannen. Opatija ist 17 km entfernt, während die Stadt Rijeka 7 km vom Apartment entfernt ist. Der Flughafen Rijeka ist 9 km entfernt.'
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
