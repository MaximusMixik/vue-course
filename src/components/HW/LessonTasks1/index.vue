<template>
  <div>
    <TaskLesson />
    <br />
    <hr />
    <TaskLesson1 />
    <br />
    <hr />
    <TaskLesson2 />
    <br />
    <hr />
    <TaskLesson3 />
    <br />
    <hr />
    <TaskLesson4 />
    <br />
    <hr />
    <TaskLesson5 />
  </div>
</template>

<script>
import TaskLesson from "./TaskLesson.vue";
import TaskLesson1 from "./TaskLesson1.vue";
import TaskLesson2 from "./TaskLesson2.vue";
import TaskLesson3 from "./TaskLesson3.vue";
import TaskLesson4 from "./TaskLesson4.vue";
import TaskLesson5 from "./TaskLesson5.vue";
export default {
  name: "LessonTask1",

  components: {
    TaskLesson,
    TaskLesson1,
    TaskLesson2,
    TaskLesson3,
    TaskLesson4,
    TaskLesson5,
  },
};
</script>
