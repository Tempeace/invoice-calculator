<template>
  <div id="app">
    <BasketCalculator name="Vue Invoice Calc" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Vue from "vue";
import BasketCalculator from "@/views/BasketCalculator/BasketCalculator";
const Component = Vue.extend({
  components: {
    BasketCalculator,
  },
  props: {
    name: String,
  },
});
export default Component;
</script>
