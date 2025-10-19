<template>
  <div class="container">
    <span>
      {{ itemData.title }}
    </span>
    <span>
      <select v-model="modelValue">
        <option disabled value="">Please select one</option>
        <option
          v-for="worker in workersList"
          :value="worker.id"
          :key="worker.id">
          {{ worker.name }}
        </option>
      </select>
      <!-- <div>task id {{ itemData.id }}</div>
      <div>select worker id {{ modelValue }}</div> -->
    </span>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  data() {
    return {
      workerId: null,
    };
  },
  computed: {
    modelValue: {
      get() {
        return this.workerId;
      },
      set(newVal) {
        console.log(this.removedItem, "removed");

        this.workerId = newVal;
        console.log(this.workerId, this.itemData.id);

        this.$emit("worker-selected", this.workerId, this.itemData.id);
      },
    },
  },

  watch: {
    "removedItem.taskId"(newValue) {
      if (newValue === this.itemData.id) {
        this.modelValue = null;
      }
    },
  },
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
    workersList: {
      type: Array,
      default: () => [],
    },
    removedItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style scoped>
.container {
  width: 350px;
  display: flex;
  justify-content: space-between;
}
</style>
