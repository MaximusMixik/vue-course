<template>
  <div>
    <h2>Hello {{ userName }} from my component</h2>
  </div>
</template>

<script>
// 2 step export
export default {
  // name: "MyComponent", //1 step component name
  components: {
    //add components
    // UsedComponent,
  },
  props: {
    // input parameters (властивості або атрибути які передаються в компонент)
    // propName: {
    //   type: Number,
    //   default: 20,
    //   required: true
    // },
  },
  data() {
    //return local component data
    return {
      userName: "Max",
    };
  },
  computed: {
    //local computed values
    // name() {
    //   return this.data;
    // },
  },
  watch: {
    // watched values
    // data(newValue, oldValue) {},
  },
  methods: {
    // component methods
    // name() {},
  },

  // add hooks
};
</script>

<style lang="scss" scoped></style>
