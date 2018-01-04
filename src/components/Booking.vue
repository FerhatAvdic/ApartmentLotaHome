<template>
  <div id="Booking">
    <v-btn href="https://www.booking.com/hotel/hr/apartment-lota-kostrena.html" round dark large color="primary" class="btn-margin">{{vmText.title}}</v-btn>
    <h4 id="cin">Check-in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 PM - 10 PM</h4>
    <h4 id="cout">Check-out &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 AM - 10 AM</h4>
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
#cout{
  margin: 5px 0;
}
#Booking{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#333;
    height: 100%;
}
.application .booking-link{
  text-decoration:none;
  color: #3AB09C;
  font-size:36px;
}
.primary {
    background-color: #3AB09C !important;
    border-color: #3AB09C !important;
}
.btn-margin{
  margin-bottom: 35px;
}
</style>
