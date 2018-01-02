<template>
  <div id="app">
    <v-app light>
       <v-content>
            <localeNav/>
            <router-view :key="$route.fullPath"></router-view>
        </v-content>
    </v-app>
  </div>
</template>

<script>
import LocaleNav from './components/LocaleNav'
export default {
  name: 'app',
  components:{
    LocaleNav
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
}
ul{
  list-style-type: none;
  padding: 0;
}
</style>
