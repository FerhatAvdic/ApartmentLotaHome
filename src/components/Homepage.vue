<template>
  <div id="Homepage">
    <Logo/>
    <Slider/>
    <Gmap id="Gmap"/>
    <Weather/>
    <Booking/>
    <Gallery/>
    <Services/>
    <Reviews/>
    <Footer/>
  </div>
</template>

<script>
import Logo from './Logo'
import Slider from './Slider'
import Gmap from './Gmap'
import Reviews from './Reviews'
import Weather from './Weather'
import Booking from './Booking'
import Gallery from './Gallery'
import Services from './Services'
import Footer from './Footer'


export default {
  id: '#Homepage',
  name: 'Homepage',
  components: {
    Logo,
    Slider,
    Gmap,
    Reviews,
    Weather,
    Booking,
    Gallery,
    Services,
    Footer
  },
  data () {
    return {
      localeId: this.$route.params.localeId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#Homepage{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50vh 50vh 40vh 75vh 40vh 40vh 300px;
  grid-auto-flow: row;
}
#Logo{
  grid-column: 4/7;
  grid-row: 1/3;
}
#Slider{
  grid-column: 1/4;
  grid-row: 1;
  
}
#Gmap{
  grid-column: 1 / 4;
  grid-row: 2;
}
#Services{
  grid-column: 1 / 7;
  grid-row: 3;
}

#Gallery{
  grid-column: 1 / 7;
  grid-row: 4;
}
#Booking{
  grid-column: 4 / 7;
  grid-row: 5;
}
#Weather-wrapper{
  grid-column: 1/4;
  grid-row: 5;
}
#Reviews{
  grid-column: 1 / 7;
  grid-row: 6;
}
#Footer{
  grid-column: 1 / 7;
  grid-row: 7;
}
</style>
