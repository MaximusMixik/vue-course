<template>
  <div>
    <h5>TODO MANAGER (from lesson 5)</h5>
    <TaskDivider />
    <PersonalTasks />
  </div>
</template>

<script>
import TaskDivider from "./components/TaskDivider";
import PersonalTasks from "./components/PersonalTasks";
export default {
  name: "TaskLesson3",
  data() {
    return {};
  },
  components: {
    TaskDivider,
    PersonalTasks,
  },
  computed: {},
  methods: {},
};
</script>
