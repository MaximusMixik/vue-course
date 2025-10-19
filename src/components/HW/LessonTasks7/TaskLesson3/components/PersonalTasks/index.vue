<template>
  <fieldset v-if="taskList.length > 0">
    <legend><h5>PersonalTasks</h5></legend>
    <h6>Tasks</h6>
    <div class="container">
      <WorkerTasks
        v-for="workerTask in taskList"
        :key="workerTask.id"
        :worker-tasks="workerTask"
        @done="doneTask({ taskId: $event, workerTask: workerTask.id })"
        @remove="removeTask({ taskId: $event, workerTask: workerTask.id })" />
    </div>

    <!-- @selected-worker="onSelectedWorker({ worker: $event, task: task })" -->
    <!-- {{ taskList }} -->
  </fieldset>
</template>

<script>
import WorkerTasks from "./WorkerTasks.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PersonalTasks",
  components: {
    WorkerTasks,
  },
  computed: {
    ...mapGetters(["taskList"]),
  },
  methods: {
    ...mapActions(["doneTask", "removeTask"]),
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
