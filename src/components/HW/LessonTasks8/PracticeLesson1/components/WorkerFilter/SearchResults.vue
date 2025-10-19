<template>
  <div>
    <h6>SearchedList</h6>
    <ol>
      <li v-for="worker in filteredWorkersList" :key="worker.id">
        {{ worker.name }} : {{ worker.salary }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchResults",
  computed: {
    ...mapGetters(["filteredWorkersList"]),
  },
};
</script>
