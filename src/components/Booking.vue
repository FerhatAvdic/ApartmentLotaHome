<template>
  <div id="Booking">
      <a href="https://www.booking.com/hotel/hr/apartment-lota-kostrena.html" class="booking-link">Make a Reservation</a>
  </div>
</template>

<script>
export default {
  id: '#Booking',
  name: 'Booking',
  data () {
    return {
      
    }
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
    color:white;
}
.application .booking-link{
  text-decoration:none;
  color: white;
  font-size:36px;
}
</style>
