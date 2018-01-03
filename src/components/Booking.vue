<template>
  <div id="Booking">
     <div class="text-xs-center">
        <v-btn href="https://www.booking.com/hotel/hr/apartment-lota-kostrena.html" round large outline dark class="lota-color">{{vmText.title}}</v-btn>
     </div>
  </div>
</template>

<script>
import filterDataByLocale from './filterDataByLocale'

export default {
  id: '#Booking',
  name: 'Booking',
  data () {
    return {
      //object to be extended by only one locale
      vmText: {},
      //object with all locales
      text: {
        title: {
            hr: 'Rezervirajte',
            en: 'Make a Reservation',
            de: 'Reservierung Machen'
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
#Booking{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#333;
    color:#22d9de;
    height: 100%;
}
.application .booking-link{
  text-decoration:none;
  color: #3AB09C;
  font-size:36px;
}
</style>
