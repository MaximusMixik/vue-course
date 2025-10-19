<template>
  <div>
    <!-- step 3  add in markup-->
    <!-- <MyComponent :workerAge="24" workerName="MaximusMixik" :likes-number="20" /> -->
    <!-- or use kebab-case-->
    <!-- <my-component /> -->
    <!-- <OtherComponent /> -->
    <MyCounter
      product-title="Milk"
      :product-number="productNumber"
      @increase="inc"
      @decrease="dec" />

    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Hello!</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import MyComponent from "./components/MyComponent.vue"; //step 1
// import OtherComponent from "./components/OtherComponent.vue"; //step 1
import MyCounter from "./components/MyCounter.vue"; //step 1

export default {
  name: "App",
  data() {
    return {
      productNumber: 11,
    };
  },
  components: {
    // HelloWorld,
    // MyComponent, //step 2
    // OtherComponent, //step 2
    MyCounter, //step 2
  },
  methods: {
    inc() {
      this.productNumber++;
    },
    dec() {
      this.productNumber--;
    },
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
