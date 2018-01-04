<template>
  <div id="Services">
    <v-container  grid-list-md class="services-grid">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">hotel</i>
            <h2>Capacity</h2>
            <p>This is a couple friendly apartment, yet children are welcome. The bedroom has a queen bed and two sofa beds in the living room. Up to two children under 6 years stay free of charge when using existing beds. You can get an extra bed on request.</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">view_quilt</i>
            <h2>Rooms</h2>
            <p>The place consists of a big living room with a sitting and a dining area, a lovely kitchen, a bathroom and a bedroom. Theres also a terrace with a beautiful ocean view. The whole appartment is fully equipped. A place like this feels like home.</p>
          </div>
        </v-flex>
        
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">wifi</i>
            <h2>Amenities</h2>
            <p>Wifi is available and free of charge. The apartment has all amenities you would need in a house such as air conditioning, wardrobe, hairdryer, towels, iron, washing machines, kitchenware, oven, refrigerator, microwave and much more.</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
           <div>
             <i class="material-icons">accessible</i>
            <h2>Accessibility</h2>
            <p>The entire unit wheelchair accessible and is located on ground floor. We want to provide the best for all of our guests.</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">local_parking</i>
            <h2>Parking</h2>
            <p>Free private parking is available on site (reservation is not needed). The entire unit is wheelchair accessible and is located on ground floor</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">pets</i>
            <h2>Pets not allowed</h2>
            <p>Doe to unexpected behavior of some pets that can leave the apartment damaged, unfortunately we do not accept pets anymore.</p>
          </div>
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
.container.grid-list-md .layout .flex {
    padding: 20px;
}
h2{
  margin: 10px 0;
}
#Services{
    background-color:#333;
    color:#fff;/*#22d9de;*/
    padding: 50px 0;
}
.flex{
    align-items:center;
}
.flex .material-icons{
    font-size:36px;
    background-color: #3ab09c;
    border: 10px solid #3ab09c;
    border-radius: 50%;
}

</style>
