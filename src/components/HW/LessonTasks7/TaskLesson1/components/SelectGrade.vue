<template>
  <label>
    <div>{{ label }}</div>
    <select v-model="currentValue">
      <!-- <option disabled selected>select one</option> -->
      <option v-for="item in list" :key="item.id" :value="item">
        {{ item.label }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "SelectGrade",
  props: {
    label: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      required: true,
      // default: () => ({
      //   id: "grade-sys-1",
      //   value: 12,
      //   label: "12-балльна система",
      // }),
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
