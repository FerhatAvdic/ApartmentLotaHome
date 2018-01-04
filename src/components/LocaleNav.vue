<template>
  <div id="localeNav">
     <v-speed-dial v-model="fab" :left="left" :top="top" :bottom="bottom" :right="right" :direction="direction" :transition="transition" :hover="hover">
      <v-btn slot="activator" color="primary" fab hover v-model="fab">
        <img src="../assets/images/blank.gif" class="flag" :class="text.language" alt="language"/>
        <v-icon>close</v-icon>
      </v-btn>
      <router-link to="/en"><v-btn fab dark><img src="../assets/images/blank.gif" class="flag flag-gb" alt="en" /></v-btn></router-link>
      <router-link to="/de"><v-btn fab dark><img src="../assets/images/blank.gif" class="flag flag-de" alt="de" /></v-btn></router-link>
      <router-link to="/hr"><v-btn fab dark><img src="../assets/images/blank.gif" class="flag flag-hr" alt="hr" /></v-btn></router-link>
    </v-speed-dial>
  </div>
</template>

<script>


import filterDataByLocale from './filterDataByLocale'
export default {
  id: '#LocaleNav',
  name: 'LocaleNav',
  data () {
    return {
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      text:{
        language:{
          en: "flag-gb",
          de: "flag-de",
          hr: "flag-hr"
        }
      }
    }
  },
  watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
  },
  created() {
    this.text = filterDataByLocale(this.text, this.$route.params.localeId)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.primary {
    background-color: #3AB09C !important;
}
#localeNav .speed-dial {
    position: fixed;
  z-index: 10000;
  }

#localeNav .btn--floating {
  position: relative;
}

</style>
