<template>
  <div id="Services">
    <v-container fluid grid-list-md class="services-grid">
      <v-layout row wrap justify-center>
        <v-flex d-flex xs6 sm3 md2>
          <v-card-text><i class="material-icons">event_seat</i> </v-card-text>
          <v-card-title>Living Room</v-card-title>
        </v-flex>
        <v-flex d-flex xs6 sm3 md2>
            <v-card-text><i class="material-icons">hotel</i> </v-card-text>
          <v-card-title>Bedrooms</v-card-title>
        </v-flex>
        <v-flex d-flex xs6 sm3 md2>
          <v-card-text><i class="material-icons">kitchen</i> </v-card-text>
          <v-card-title>Kitchen</v-card-title>
        </v-flex>
        <v-flex d-flex xs6 sm3 md2>
          <v-card-text><i class="material-icons">panorama_fish_eye</i> </v-card-text>
          <v-card-title>Sea view</v-card-title>
        </v-flex>
        <v-flex d-flex xs6 sm3 md2>
          <v-card-text><i class="material-icons">wifi</i></v-card-text>
          <v-card-title>Wifi</v-card-title>
        </v-flex>
        <v-flex d-flex xs6 sm3 md2>
          <v-card-text><i class="material-icons">local_parking</i> </v-card-text>
          <v-card-title>Parking</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  id: '#Services',
  name: 'Services',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Services{
    background-color:#333;
    color:#fff;/*#22d9de;*/
    padding: 50px 0;
}
.flex{
    font-size:24px;
    align-items:center;
    justify-content: center;
    text-align:center;
    flex-direction: column;
}
.flex .material-icons{
    font-size:56px;
}

</style>
