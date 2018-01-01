<template>
  <gmap-map
    :center="center"
    :zoom="14"
    :styles="[styles]"
  >
  <!--style="width: 100%; height: 300px"-->
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="false"
      :draggable="false"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  // New in 0.4.0
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
      v: '3'
      // libraries: 'places', //// If you need to use place input
    }
  })

  export default {
    data () {
      return {
        center: {lat: 45.2965, lng: 14.518},
        markers: [{
          position: {lat: 45.2965, lng: 14.518}
        }, {
          position: {lat: 45.2965, lng: 14.518}
        }],
        styles:    [
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#e8e9f4"
                  }
                ]
              },
              {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#fafbce"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#ffc68c"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#ed8989"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#ffc891"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#d2bf93"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#c9e4e1"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#25a6b4"
                  }
                ]
              }
            ]

        
      }
    }
  }
</script>
