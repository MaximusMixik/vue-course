<template>
  <fieldset>
    <legend>
      <h4>
        {{ workerData.name }}
      </h4>
    </legend>
    <WorkerTasks
      v-for="task in workerData.tasksList"
      :task="task"
      :key="task.id"
      @remove-task="removeTask" />
  </fieldset>
</template>

<script>
import WorkerTasks from "./WorkerTasks.vue";
export default {
  name: "DividedTasks",
  components: {
    WorkerTasks,
  },
  props: {
    workerData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTask(taskId) {
      this.$emit("remove-task", {
        taskId: taskId,
        workerId: this.workerData.id,
      });
    },
  },
};
</script>
