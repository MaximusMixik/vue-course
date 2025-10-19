<template>
  <div class="list">
    <FavoriteList :itemsData="myList" />
  </div>
</template>

<script>
import { favoriteSources } from "../constants/1_data_google_favorite";
import FavoriteList from "./components/FavoriteList.vue";

export default {
  name: "TaskLesson1",
  components: {
    FavoriteList,
  },
  data() {
    return {};
  },
  computed: {
    myList() {
      return favoriteSources;
    },
  },
  methods: {},
};
</script>

<style scoped>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
