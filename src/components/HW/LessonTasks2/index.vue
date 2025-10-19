<template>
  <div>
    <TaskLessonVIF />
    <TaskLessonVFOR />
    <TaskLessonVClass />
    <TaskLesson1 />
    <TaskLesson2 />
    <TaskLesson3 />
    <TaskLesson4 />
    <TaskLesson5 />
    <TaskLesson6 />
  </div>
</template>

<script>
import TaskLessonVIF from "./TaskLessonVIF.vue";
import TaskLessonVFOR from "./TaskLessonVFOR.vue";
import TaskLessonVClass from "./TaskLessonVClass.vue";
import TaskLesson1 from "./TaskLesson1.vue";
import TaskLesson2 from "./TaskLesson2.vue";
import TaskLesson3 from "./TaskLesson3.vue";
import TaskLesson4 from "./TaskLesson4.vue";
import TaskLesson5 from "./TaskLesson5.vue";
import TaskLesson6 from "./TaskLesson6.vue";
export default {
  name: "LessonTasks2",

  components: {
    TaskLessonVIF,
    TaskLessonVFOR,
    TaskLessonVClass,
    TaskLesson1,
    TaskLesson2,
    TaskLesson3,
    TaskLesson4,
    TaskLesson5,
    TaskLesson6,
  },
};
</script>
