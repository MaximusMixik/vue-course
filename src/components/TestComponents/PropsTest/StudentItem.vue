<template>
  <div>
    <h5>StudentItem {{ count }}</h5>
    <div>Name : {{ studentInfo.name }}</div>
    <div>Class : {{ studentInfo.currentClass }}</div>
    <div v-for="(score, ind) in studentInfo.scores" :key="ind">
      <span style="margin-right: 10px; width: 20px; display: inline-block"
        >{{ score }}
      </span>
      <button @click="onRemoveScore(studentInfo.id, ind)">
        RemoveScore {{ ind + 1 }}
      </button>
    </div>
    <button @click="onRemoveStudent(studentInfo.id)">Remove Student</button>
    <!-- <div>
      <span v-for="(score, ind) in studentInfo.scores" :key="ind">
        {{ score
        }}<template v-if="ind !== studentInfo.scores.length - 1">, </template>
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "StudentItem",
  props: {
    studentInfo: {
      type: Object,
      default: () => ({}),
    },
    count: {
      type: Number,
      // default: 0,
    },
  },
  methods: {
    onRemoveScore(studentId, scoreInd) {
      console.log(studentId, scoreInd);
      this.$emit("removeScore", { studentId, scoreInd });
    },
    onRemoveStudent(id) {
      // this.$emit("removeStudent", this.studentInfo.id);
      this.$emit("removeStudent", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
