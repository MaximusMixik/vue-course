<template>
  <h3>TestComponents</h3>
  <PropsTest
    :scores-list="scoresList"
    :students-list="studentsList"
    @removeStudent="removeStudentFromList" />
</template>

<script>
import PropsTest from "./PropsTest";
export default {
  name: "TestComponents",
  components: {
    PropsTest,
  },
  data() {
    return {
      scoresList: [12, 3, 10, 8, 3, 5, 6],
      studentsList: [
        {
          name: "Jessica",
          scores: [11, 12, 10, 12, 9, 10, 8],
          id: 10,
          currentClass: 11,
        },
        {
          name: "David",
          scores: [12, 3, 10, 8, 3, 5, 6],
          id: 12,
          currentClass: 9,
        },
        {
          name: "Sam",
          scores: [3, 5, 6, 12, 3, 10, 8],
          id: 11,
          currentClass: 7,
        },
      ],
    };
  },
  methods: {
    removeStudentFromList(studentId) {
      this.studentsList = this.studentsList.filter((st) => st.id !== studentId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
