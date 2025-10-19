<template>
  <div>
    <label>
      <span>
        {{ title }}
      </span>
      <select v-model="currentValue">
        <option
          :value="option"
          :id="option.value || option.name"
          v-for="option in valuesList"
          :key="option.id"
        >
          {{ option.label || option.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    modelValue: {
      type: Object,
      // default: "Title",
    },
    valuesList: {
      type: Array,
      default: () => [
        { id: 1, value: 12, label: "12-балльна система" },
        { id: 2, value: 5, label: "5-балльна система" },
      ],
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
