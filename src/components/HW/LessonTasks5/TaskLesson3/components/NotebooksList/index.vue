<template>
  <div style="display: grid; gap: 30px">
    <!--  grid-template-columns: repeat(4, 1fr) -->
    <notebook-item
      v-for="notebook in notebookList"
      :notebook="notebook"
      @add-to-cart="addToCart"
      :key="notebook.id" />
  </div>
</template>

<script>
import NotebookItem from "./NotebookItem.vue";
export default {
  name: "NotebooksList",
  components: {
    NotebookItem,
  },
  props: {
    notebookList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addToCart(notebookId) {
      this.$emit("addToCart", notebookId);
		},

  },
};
</script>
