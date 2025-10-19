<template>
  <label>
    <div>
      {{ label }}
    </div>
    <input
      v-model.trim="currentValue"
      name="email"
      autocomplete="true"
      :class="inputClass"
      type="text" />
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      error: false,
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: "Custom input",
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    inputClass() {
      let currentClass = "";
      if (this.error) currentClass = "red";
      return currentClass;
    },
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        if (this.modelModifiers.check) {
          if (/(@)/g.test(newVal)) this.error = true;
        }
        this.$emit("update:modelValue", newVal);
      },
    },
  },
};
</script>

<style scoped>
.red {
  background: red;
}
</style>
