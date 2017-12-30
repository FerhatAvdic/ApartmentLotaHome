<template>
  <div id="app">
    <localeNav/>
    <router-view :key="$route.fullPath"></router-view>
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
}
ul{
  list-style-type: none;
  padding: 0;
}
</style>
