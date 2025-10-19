<template>
  <fieldset>
    <legend><h4>Task Divider</h4></legend>
    <h5>Tasks</h5>
    <TaskItem
      v-for="task in tasksList"
      :item-data="task"
      :workers-list="workersList"
      @worker-selected="workerSelected"
      :removed-item="removedItem"
      :key="task.id" />
  </fieldset>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  name: "TaskDivider",
  components: {
    TaskItem,
  },
  props: {
    workersList: {
      type: Array,
      default: () => [],
    },
    tasksList: {
      type: Array,
      default: () => [],
    },
    removedItem: {
      type: Object,
      // required: true,
      default: () => ({}),
    },
  },

  methods: {
    workerSelected(workerId, taskId) {
      if (!workerId) return;
      this.$emit("workerSelected", workerId, taskId);
    },
  },
};
</script>
