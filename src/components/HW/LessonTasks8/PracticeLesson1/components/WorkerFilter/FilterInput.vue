<template>
  <label>
    <div>search worker</div>
    <input type="text" v-model="inputValue" />
  </label>
  <!-- {{ searchItem }} - {{ inputValue }} -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilterInput",
  computed: {
    ...mapGetters(["searchItem"]),
    inputValue: {
      get() {
        return this.searchItem;
      },
      set(newVal) {
        this.updateSearch(newVal);
      },
    },
  },
  methods: {
    ...mapActions(["updateSearch"]),
  },
};
</script>
