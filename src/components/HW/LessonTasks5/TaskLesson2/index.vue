<template>
  <h2>Задача 2.</h2>
  <RaspberryList :items-data="list" />
  <div></div>
</template>

<script>
import { raspberryList } from "../constants/2_data_raspberry.js";
import RaspberryList from "./components/RaspberryList.vue";
export default {
  name: "TaskLesson2",
  components: {
    RaspberryList,
  },
  data() {
    return {};
  },
  computed: {
    list() {
      return raspberryList;
    },
  },
  methods: {},
};
</script>
