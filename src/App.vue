<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyComp/>
  <hr/>
  <elementui/>
</template>



<script>
import MyComp from './components/MyComp.vue'
import elementui from './components/Elementui.vue'

export default {
  name: 'App',
  components: {
    MyComp,
    elementui
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
