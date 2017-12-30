<template>
  <ul id="LocaleNav">
    <li><router-link to="/en"><img src="../assets/images/blank.gif" class="flag flag-gb" alt="en" /></router-link></li>
    <li><router-link to="/hr"><img src="../assets/images/blank.gif" class="flag flag-hr" alt="hr" /></router-link></li>
    <li><router-link to="/ge"><img src="../assets/images/blank.gif" class="flag flag-de" alt="ge" /></router-link></li>
  </ul>
</template>

<script>


export default {
  id: '#LocaleNav',
  name: 'LocaleNav',
  data () {
    return {}
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#LocaleNav{
    position: fixed;
    top: 0; right:0;
}

</style>
