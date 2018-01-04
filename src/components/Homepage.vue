<template>
  <div id="Homepage">
            <localeNav/>
    <div class="welcome-grid">
        <Logo/>
        <Slider/>
        <Gmap id="Gmap"/>
    </div>
    <Services/>
    <Gallery/>
    <v-container grid-list-md class="lota-section">
      <v-layout row wrap style="height: 100%;">
        <v-flex d-flex justify-center align-center xs12 sm12 md7 >
          <Weather/>
        </v-flex>
        <v-flex d-flex justify-center align-center xs12 sm12 md5>
             <Booking/>
        </v-flex>
      </v-layout>
    </v-container>
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
import localeNav from './localeNav'

export default {
  id: '#Homepage',
  name: 'Homepage',
  components: {
    localeNav,
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
      localeId: this.$route.params.localeId,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#Homepage{
    background-color: #333;
}
.lota-section{
  height: 300px;
  padding: 50px 10vw;
  background-color: #333;
  color:white;
}
@media only screen and (max-width: 768px) {
  .lota-section{
  height: 400px;
}
}
.booking-flex{
  height:100%;
  color:white;
}
.welcome-grid{
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 50vh 50vh;
}
#Logo{
  grid-column: 2/3;
  grid-row: 1/3;
}
#Slider{
  grid-column: 1/2;
  grid-row: 1;

}
#Gmap{
  grid-column: 1 / 2;
  grid-row: 2;
}

@media only screen and (max-width: 768px) {
    .welcome-grid{
      grid-template-rows: 100vh 100vh;
    }
    #Logo{
      grid-column: 2/3;
      grid-row: 1;
    }
    #Slider{
      grid-column: 1/2;
      grid-row: 1;

    }
    #Gmap{
      grid-column: 1 / 3;
      grid-row: 2;
    }
}
@media only screen and (max-width: 500px) {
    .welcome-grid{
      grid-template-rows: 100vh 100vh 100vh;
    }
    #Logo{
      grid-column: 1/3;
      grid-row: 1;
    }
    #Slider{
      grid-column: 1/3;
      grid-row: 2;

    }
    #Gmap{
      grid-column: 1 / 3;
      grid-row: 3;
    }
}
/*
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
*/


.fe_container .fe_title {
    display:none;
    height: 0;
    border: 0;
    height:0;
}
.fe_location{
  display:none;
}
.fe_container{
  height:unset;
}
.fa-language{
  font-size: 36px;
}
</style>
