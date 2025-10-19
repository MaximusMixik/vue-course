<template>
  <fieldset>
    <legend>
      <h5>StudentList</h5>
    </legend>
    <div class="grid">
      <div>
        <LoadingComp v-if="isLoading" />
        <ErrorComp v-else-if="error" :error="error" />
        <template v-else>
          <div class="row">
            <span>Initials</span>
            <span>average Score</span>
          </div>
          <div v-for="student in studentList" :key="student.id" class="row">
            <span>{{ student.fullName }}</span>
            <span>{{ student.averageScore }}</span>
          </div>
        </template>
      </div>
      <div>
        <SelectGrade
          v-model="gradeValue"
          label="Grading System"
          :list="gradingSystems" />
      </div>
      <div>
        <SelectCategory
          v-model="categoryValue"
          label="Grading categories"
          :list="categories" />
      </div>
      <div>
        <button @click="clearFilter">Clear Filters</button>
      </div>
    </div>
  </fieldset>
</template>

<script>
import ErrorComp from "../ErrorComp.vue";
import LoadingComp from "../LoadingComp.vue";
import SelectCategory from "../SelectCategory.vue";
import SelectGrade from "../SelectGrade.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "StudentList",

  components: {
    LoadingComp,
    ErrorComp,
    SelectGrade,
    SelectCategory,
  },
  computed: {
    ...mapGetters([
      "studentList",
      "error",
      "isLoading",
      "gradingSystems",
      "currentGrade",
      "categories",
      "currentCategory",
    ]),

    gradeValue: {
      get() {
        return this.currentGrade;
      },
      set(newVal) {
        this.changeGrade(newVal);
      },
    },
    categoryValue: {
      get() {
        return this.currentCategory;
      },
      set(category) {
        this.filterByCategory(category);
      },
    },
  },
  methods: {
    ...mapActions([
      "loadStudents",
      "changeGrade",
      "filterByCategory",
      "clearFilter",
    ]),
  },
  mounted() {
    this.loadStudents();
  },
};
</script>

<style scoped>
.row {
  display: flex;
  max-width: 250px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  & > :first-child {
    grid-column: span 2;
  }
}
</style>
