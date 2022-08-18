<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      I'm gonna try to glue some of my old projects here. Today is a good day, FOR SCIENCE!!
    </p>
    <p>
      But first, lets see what sam has to say.....<br>
      {{ samsays }}
    </p>
  </div>
  <CustomerList/>
</template>

<script>
import CustomerList from '@/components/CustomerList.vue';

export default {
  name: 'HelloWorld',
  components: {CustomerList},
  props: {
    msg: String,
    samsays: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
