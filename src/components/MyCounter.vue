<template>
  <div>
    <h2>{{ productTitle }}</h2>
    <br />

    <div>
      <button @click="onDecrease">Decrease (-)</button>
      {{ productNumber }}
      <button @click="onIncrease">Increase (+)</button>
    </div>
  </div>
</template>

<script>
// 2 step export
export default {
  name: "MyCounter",
  components: {},
  props: {
    productTitle: {
      type: String,
      required: true,
    },
    productNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onDecrease() {
      this.$emit("decrease");
    },
    onIncrease() {
      this.$emit("increase");
    },
  },

  // add hooks
};
</script>

