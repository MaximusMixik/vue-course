<template>
  <div>CustomInput</div>

  <label>
    {{ label }}
    {{ likes }}
    <button @click="onAddLikeClick">add like</button>
    <button @click="onAddDislikeClick">add dislike</button>
    <input type="number" v-model.number="currentValue" />
    <!-- <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" /> -->
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  methods: {
    onAddLikeClick() {
      this.$emit("like");
    },
    onAddDislikeClick() {
      this.$emit("dislike");
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
  },
  props: {
    modelValue: {
      type: Number,
      // required: true,
    },
    label: {
      type: String,
      default: null,
    },
    likes: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
