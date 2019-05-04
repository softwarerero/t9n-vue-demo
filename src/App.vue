<template>
  <div id="app">
    <Header/>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloT9n msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HelloT9n from "./components/HelloT9n.vue";
import store from './Store.js'

export default {
  name: "app",
  store,
  components: {
    Header,
    HelloT9n,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
