<template>
  <fieldset>
    <div class="grid">
      <div>
        <h6>Students list</h6>
        <ul>
          <li
            v-for="student in studentsTransformed"
            :key="student.id"
            class="row">
            <span>{{ student.fullName }}</span>
            <span>{{ student.averageScore }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h6>Grading Systems</h6>
        <select v-model="selectedGradingSystemValue">
          <option
            v-for="grade in gradingSystems"
            :key="grade.id"
            :value="grade.value">
            {{ grade.label }}
          </option>
        </select>
        <p>Selected: {{ selectedGradingSystemValue }}</p>
      </div>
      <div>
        <h6>Categories</h6>
        <select v-model="selectedCategories">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <p>Selected: {{ selectedCategories }}</p>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { gradingSystems, students, categories } from "./constants/data";

export default {
  name: "TaskLesson4",
  data() {
    return {
      selectedGradingSystemValue: gradingSystems[0].value,
      selectedCategories: categories[0].id,
    };
  },
  computed: {
    categories() {
      return categories;
    },
    gradingSystems() {
      return gradingSystems;
    },
    studentsTransformed() {
      if (this.selectedGradingSystemValue === 5) {
        return students.map((s) => {
          let score;
          switch (true) {
            case s.averageScore <= 1:
              score = 1;
              break;
            case s.averageScore <= 2:
              score = 2;
              break;
            case s.averageScore <= 6:
              score = 3;
              break;
            case s.averageScore <= 9:
              score = 4;
              break;
            case s.averageScore <= 12:
              score = 5;
              break;
            default:
              score = "uncorrected";
          }
          return { ...s, averageScore: score };
        });
      }
      return students.map((s) => ({ ...s }));
    },
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
}
.grid > :first-child {
  grid-column: span 2;
}
</style>
