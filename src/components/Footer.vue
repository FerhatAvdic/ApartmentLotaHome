<template>
  <div id="Footer">
      <v-container  grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex d-flex flex-column justify-center>
       <p><i class="material-icons inline-icon"> copyright</i> All rights reserved 2018</p>
      </v-flex>
      <v-flex>
       <p><i class="material-icons inline-icon">home</i> Maračići 3, 51221 Kostrena, Croatia </p>
      </v-flex>
      <v-flex><p><i class="material-icons inline-icon">phone</i> +386999999</p></v-flex>
      
       <v-flex><p><i class="material-icons inline-icon">email</i> email.email@gmail.com</p></v-flex> 
       <v-flex>
         <social-sharing url="http://www.apartmani-lota.com"
                      title="Apartmani Lota"
                      description="Our facility is located at a 12-minute walk from the beach in Kostrena - in the Primorje-Goranska County. Apartment Lota has a fully equipped kitchen, one bedroom, a toilet. Guests have free WiFi, satellite dish, TV. You can also relax in the yard in front of the apartment. Opatija is 17 km away while the town of Rijeka 7 km from the apartment. Rijeka Airport is 9 km away."
                      quote="Our facility is located at a 12-minute walk from the beach in Kostrena - in the Primorje-Goranska County. Apartment Lota has a fully equipped kitchen, one bedroom, a toilet. Guests have free WiFi, satellite dish, TV. You can also relax in the yard in front of the apartment. Opatija is 17 km away while the town of Rijeka 7 km from the apartment. Rijeka Airport is 9 km away."
                      hashtags="croatia,kostrena,vacation,apartment"
                      inline-template>
          <div class="big-icons">
              <network network="facebook">
                <v-btn fab dark small color="blue">
                  <i class="fa fa-facebook"></i>
                </v-btn>
              </network>
              <network network="pinterest">
                <v-btn fab dark small color="red">
                  <i class="fa fa-pinterest"></i>
                </v-btn>
              </network>
              <network network="reddit">
                <v-btn fab dark small color="orange">
                  <i class="fa fa-reddit"></i>
                </v-btn>
              </network>
              <network network="whatsapp">
                <v-btn fab dark small color="green">
                  <i class="fa fa-whatsapp"></i>
                </v-btn>
              </network>
          </div>
        </social-sharing>
       </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>

export default {
  id: '#Footer',
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.grid-list-md .layout .flex {
    padding: 20px;
}
h3{
  margin: 10px 0;
}
p{
  margin-bottom: 5px;
}
#Footer{
    padding: 15px;
    background-color: #333;
    color:white;
}
.flex-column{
  flex-direction:column;
}
.material-icons{
  font-size: 18px;
}
.inline-icon {
   vertical-align: middle;
}

</style>
