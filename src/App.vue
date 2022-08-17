<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld 
    msg="Welcome to my first Vue app!!"
    samsays="The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
  />
  <CustomerList/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CustomerList from './components/CustomerList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomerList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
