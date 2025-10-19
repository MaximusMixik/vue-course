<template>
  <fieldset>
    <legend><h5>TaskDivider</h5></legend>
    <h6>Tasks</h6>
    <TaskItem
      v-for="task in tasksList"
      :key="task.id"
      :workers-list="workersList"
      :task="task"
      @selected-worker="addToList({ worker: $event, task: task })" />
  </fieldset>
</template>

<script>
import { workersList, tasksList } from "../../constants/6_tasks_devider";
import { mapGetters, mapActions } from "vuex";
import TaskItem from "./TaskItem.vue";
export default {
  name: "TaskDivider",
  components: {
    TaskItem,
  },
  computed: {
    workersList() {
      return workersList;
    },
    tasksList() {
      return tasksList;
    },
    ...mapGetters(["taskList"]),
  },
  methods: {
    ...mapActions(["addToList"]),

    // or use method after event
    //  @selected-worker="onSelectedWorker({ worker: $event, task: task })"
    // onSelectedWorker({ worker, task }) {
    //   // console.log(worker, task);
    //   // this.addToList({
    //   //   id: new Date().getTime(),
    //   //   worker,
    //   //   task,
    //   // });
    // },
  },
};
</script>
