<template>
  <label>
    {{ label }}
    <input
      type="number"
      :class="currentStatusColor"
      v-model.number="currentValue" />
    <!-- {{ currentValue }} {{ modelValue }} -->
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Number,
      default: null,
    },
    statusColor: {
      type: Object,
      default: () => ({}),
    },
    revers: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        // this.currentValue = this.modelValue;
        this.$emit("update:modelValue", newVal);
      },
    },
    currentStatusColor() {
      if (!this.currentValue) return "";

      let statusClass;
      if (this.revers) {
        if (this.currentValue < this.statusColor.min) statusClass = "red";
        else if (this.currentValue < this.statusColor.mid)
          statusClass = "yellow";
        else if (this.currentValue < this.statusColor.max)
          statusClass = "green";
        else statusClass = "orange";
      } else {
        if (this.currentValue < this.statusColor.min) statusClass = "yellow";
        else if (this.currentValue < this.statusColor.mid)
          statusClass = "green";
        else if (this.currentValue < this.statusColor.max)
          statusClass = "orange";
        else statusClass = "red";
      }

      return statusClass;
    },
  },
};
</script>

<style scoped>
.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}
.orange {
  background-color: orange;
}
.red {
  background-color: red;
}
</style>
