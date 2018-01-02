<template>
  <div id="Gallery">
      <v-layout row class="flex-wrapper">
        <v-flex xs12 sm6 md3 v-for="(img, index) in gallery" :key="img" :style="{'order':index}" class="gallery-item">
          <v-card dark tile flat style="height:100%;">
            <v-card-media :src="img" height="100%"></v-card-media>
          </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  id: '#Gallery',
  name: 'Gallery',
  data () {
    return {
      gallery: ['http://lorempixel.com/640/480/nature/1', 'http://lorempixel.com/640/480/nature/2','http://lorempixel.com/640/480/nature/3',
      'http://lorempixel.com/640/480/nature/4','http://lorempixel.com/640/480/nature/5','http://lorempixel.com/640/480/nature/6','http://lorempixel.com/640/480/nature/7','http://lorempixel.com/640/480/nature/8']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Gallery{
    background-color: rgb(123, 225, 238);
    overflow: hidden;
}
.flex-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
     justify-content: space-around;
    flex-wrap: wrap;
    height:100%;
}
.gallery-item{
    height:50%;
}

</style>
