<template>
  <div id="Logo">
      <img class="logo" src="../assets/images/lota-logo.svg">
  </div>
</template>

<script>

export default {
  id: '#Logo',
  name: 'Logo',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Logo{
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #ffffff;
    background-color: #333;
    background-image: url('../assets/images/kostrena.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: top;
}

#Logo::before{
    content:"";
    position: absolute;
    top:0; left:0;
    background-color: black;
    opacity: 0.3;
    width:100%;
    height:100%;

}

.logo{
  width: 300px;
  max-width: 75vw;
  z-index: 5;
}
</style>
