<template>
  <label>
    <div>{{ label }}</div>
    <select v-model="currentValue">
      <option disabled selected>select one</option>
      <option v-for="item in list" :key="item.id" :value="item">
        {{ item.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "SelectCategory",
  props: {
    label: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      // required: true,
      default: () => [],
    },
    modelValue: {
      type: [Object, String],
      default: () => ({}),
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
};
</script>

<style lang="scss" scoped></style>
