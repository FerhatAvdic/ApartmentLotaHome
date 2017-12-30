<template>
  <div id="Homepage">
    <Slider/>
    <Gmap/>
  </div>
</template>

<script>
import Slider from './Slider'
import Gmap from './Gmap'
export default {
  id: '#Homepage',
  name: 'Homepage',
  components: {
    Slider,
    Gmap
  },
  data () {
    return {
      localeId: this.$route.params.localeId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
