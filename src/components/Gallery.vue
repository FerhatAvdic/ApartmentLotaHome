<template>
  <div id="Gallery">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md3 v-for="(img, index) in gallery" :key="img.id" :style="{'order':index}" class="gallery-item">
            <img :src="img.url">
        </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from './firebaseInit'
import 'firebase/firestore'
const db = firebase.firestore()

export default {
  id: '#Gallery',
  name: 'Gallery',
  data () {
    return {
      gallery: []
    }
  },
  created(){
    db.collection("homePhotos").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          const homePhoto = {
              'id': doc.id,
              'url':doc.data().url
          }
          this.gallery.push(homePhoto)
      })
    })
  }
}

/*
<v-layout row class="flex-wrapper">
        <v-flex xs12 sm6 md3 v-for="(img, index) in gallery" :key="img" :style="{'order':index}" class="gallery-item">
          <v-card dark tile flat style="height:100%;">
            <v-card-media :src="img" height="100%"></v-card-media>
          </v-card>
        </v-flex>
    </v-layout>
    <div class="gallery-item" v-for="img in gallery" :key="img" :style="{'background-image': 'url(\'' + img +'\')'}"></div>
    */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.grid-list-md .layout .flex{
  padding: 0;
}
.container.grid-list-md {
    padding: 0px;
}
.gallery-item{
  height: 320px;
  width: 100%;;
}
.gallery-item img{
  object-fit: cover;
}
</style>
