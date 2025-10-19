<template>
  <div class="container">
    {{ task.title }} <button @click="removeTask">delete task</button>
  </div>
</template>

<script>
export default {
  name: "WorkerTasks",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTask() {
      this.$emit("remove-task", this.task.id);
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
.container:not(:last-child) {
  margin-bottom: 10px;
}
</style>
