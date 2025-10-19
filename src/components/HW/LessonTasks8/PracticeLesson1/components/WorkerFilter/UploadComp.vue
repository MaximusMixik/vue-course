<template>
  <LoadingComp v-if="isLoading" />
  <ErrorComp v-else-if="error" />
  <SearchResults v-else />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ErrorComp from "./ErrorComp.vue";
import LoadingComp from "./LoadingComp.vue";
import SearchResults from "./SearchResults.vue";

export default {
  name: "UploadComp",
  components: {
    ErrorComp,
    LoadingComp,
    SearchResults,
  },
  computed: {
    ...mapGetters(["searchItem", "error", "isLoading", "workerList"]),
  },
  methods: {
    ...mapActions(["loadData"]),
  },
  mounted() {
    this.loadData();
  },
};
</script>
