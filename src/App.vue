<template>
  <div id="app">
    <v-app light>
       <v-content>
            <router-view :key="$route.fullPath"></router-view>
        </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  line-height: 1.5;
  
    background-color:#333;
}
ul{
  list-style-type: none;
  padding: 0;
}
</style>
