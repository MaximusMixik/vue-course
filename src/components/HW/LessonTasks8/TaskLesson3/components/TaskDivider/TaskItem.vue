<template>
  <div>
    <div class="container">
      <span>{{ task.title }}</span>
      <select v-model="selectedWorkerValue">
        <option
          v-for="worker in workersList"
          :value="worker.id"
          :key="worker.id">
          {{ worker.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  data() {
    return {
      selectedWorker: "",
    };
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    workersList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectedWorkerValue: {
      get() {
        return this.selectedWorker;
      },
      set(newVal) {
        const selectedWorker = this.workersList.find((w) => w.id === newVal);
        // this.$emit("selectedWorker", newVal);
        this.$emit("selectedWorker", selectedWorker);
      },
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
}
</style>
