<template>
  <div id="app">
    <img class="logo" src="./assets/lota-logo.svg">
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
  background: #dddddd;
  background-image: url('./assets/rovinj.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 430px;

}
.logo{
  width: 230px;
  margin-top: 35px;
}
</style>
