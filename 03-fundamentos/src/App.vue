<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter v-bind:start="101" title="Hola" />
  <!-- También puedo usar :start="15" y así se envía como número -->
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
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
