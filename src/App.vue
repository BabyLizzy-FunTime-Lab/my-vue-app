<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">VacationPicker</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
  </nav>
  <div class="jumbotron">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <VacationPicker />
</template>

<script>
import VacationPicker from './components/VacationPicker.vue'

export default {
  name: 'App',
  components: {
    VacationPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped>
  .jumbotron {
    text-align: center;

  }
  nav {
    padding-left: 1em;
    padding-right: 1em;
  }
</style>
