<template>
  <fieldset>
    <legend>
      <h6>{{ workerTasks.worker.name }}</h6>
    </legend>
    <ul v-if="workerTasks.tasks.length > 0" class="list">
      <li v-for="task in workerTasks.tasks" :key="task.id" class="container">
        <!-- {{ task }} -->
        <span>
          {{ task.title }}
        </span>
        <div>
          <button v-if="!task.isDone" @click="$emit('done', task.id)">
            Done
          </button>
          <button @click="$emit('remove', task.id)">Remove</button>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  name: "WorkerTasks",

  props: {
    workerTasks: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  gap: 20px;
  & div {
    display: flex;
    gap: 6px;
  }
}
.list {
  display: grid;
  gap: 10px;
}
</style>
