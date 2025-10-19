<template>
  <h4>PropsTest</h4>
  <div v-for="(score, ind) in scoresList" :key="ind">
    {{ score }}
  </div>
  <StudentItem
    v-for="(student, ind) in studentsList"
    :key="student.id"
    :studentInfo="student"
    :count="ind + 1"
    @removeStudent="forwardRemove"
    @removeScore="removeScore" />
  <!--@removeStudent="remove" -->
</template>

<script>
import StudentItem from "./StudentItem.vue";
export default {
  components: {
    StudentItem,
  },
  name: "PropsTest",
  props: {
    scoresList: {
      type: Array,
      default: () => [],
    },
    studentsList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeScore({ studentId, scoreInd }) {
      const currentStudent = this.studentsList.find(
        (st) => st.id === studentId
      );
      currentStudent.scores.splice(scoreInd, 1);
    },
    // remove(studentIdToRemove) {
    //   console.log(studentIdToRemove);

    //   const indexToDelete = this.studentsList.findIndex(
    //     (st) => st.id === studentIdToRemove
    //   );

    //   const newArr = JSON.parse(JSON.stringify(this.studentsList));

    //   console.log(newArr);

    //   newArr.splice(indexToDelete, 1);
    //   this.studentsList = newArr;
    // },
    forwardRemove(studentId) {
      this.$emit("removeStudent", studentId); // пробрасываем наверх
    },
  },
};
</script>

<style lang="scss" scoped></style>
