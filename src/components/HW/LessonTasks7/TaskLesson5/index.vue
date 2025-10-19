<template>
  <div>
    <h6>Student List</h6>

    <div class="grid">
      <div>
        <div class="container">
          <span> Initials </span>
          <span> Average Score </span>
        </div>
        <ul>
          <li v-for="s in getOtherGradeList" :key="s.id" class="container">
            <span>
              {{ s.fullName }}
            </span>
            <span>
              {{ s.averageScore }}
            </span>
          </li>
        </ul>
      </div>

      <CustomSelect v-model="currentGradeValue" :values-list="grade" />
      <CustomSelect v-model="currentCategoryValue" :values-list="categories" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CustomSelect from "./components/CustomSelect.vue";
export default {
  name: "TaskLesson4",
  components: {
    CustomSelect,
  },
  computed: {
    ...mapGetters([
      "getOtherGradeList",
      // "filteredStudentList",
      "grade",
      "categories",
      "currentGrade",
      "currentCategory",
    ]),

    currentGradeValue: {
      get() {
        return this.currentGrade;
      },
      set(newVal) {
        this.setGradeValue(newVal);
      },
    },
    currentCategoryValue: {
      get() {
        return this.currentCategory;
      },
      set(newVal) {
        this.setGradeValue(newVal);
      },
    },
  },
  created() {
    this.loadStudents();
    this.loadGrade();
    this.loadCategories();
  },
  methods: {
    ...mapActions([
      "loadStudents",
      "loadGrade",
      "loadCategories",
      "setGradeValue",
    ]),
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 200px;
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.grid > :first-child {
  /* background-color: red; */
  grid-column: span 2;
}
</style>
