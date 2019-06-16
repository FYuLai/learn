<template>
  <div id="app">
  <button @click="decrement">-</button>
   {{$store.state.count}}
   <button @click="increment">+</button>
  </div>
</template>

<script>
//借
import {mapActions} from 'vuex';
export default {
  
  name: 'App',
  methods:mapActions([
    'increment',
    'decrement'
  ]),
  components:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
