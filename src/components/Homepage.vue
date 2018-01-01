<template>
  <div id="Homepage">
    <Slider/>
    <Gmap id="Gmap"/>
    <Reviews/>
  </div>
</template>

<script>
import Slider from './Slider'
import Gmap from './Gmap'
import Reviews from './Reviews'
export default {
  id: '#Homepage',
  name: 'Homepage',
  components: {
    Slider,
    Gmap,
    Reviews
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
  grid-template-rows: 50vh 50vh 50vh;
  grid-auto-flow: row;
}
#Slider{
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#Gmap{
  grid-column: 1 / 7;
  grid-row: 2 / 3;
}
#Reviews{
  grid-column: 1 / 7;
  grid-row: 3;
}

</style>
