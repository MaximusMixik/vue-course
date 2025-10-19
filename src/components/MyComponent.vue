<template>
  <div>
    <h2>Hello {{ userName }} from my component</h2>

    <div>
      worker name : {{ workerName }}
      <br />
      age : {{ workerAge }}
    </div>

    <div>
      like count
      {{ likes }}
    </div>
    <div>
      <button @click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>
  </div>
</template>

<script>
// 2 step export
export default {
  name: "MyComponent", //1 step component name
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
    workerName: {
      type: String,
      default: "Guest",
    },
    workerAge: {
      type: Number,
      required: true,
    },
    likesNumber: {
      type: Number,
      default: 10,
    },
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
    addLike() {
      this.$emit("like");
      // this.$emit(eventName, data);
    },
    addDislike() {
      this.$emit("dislike");
    },
  },

  // add hooks
};
</script>

<style lang="scss" scoped></style>
vb
