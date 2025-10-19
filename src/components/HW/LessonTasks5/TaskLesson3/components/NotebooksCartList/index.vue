<template>
  <div style="display: grid; gap: 30px">
    <!--  grid-template-columns: repeat(4, 1fr) -->
    <notebook-item
      v-for="notebook in notebookList"
      :notebook="notebook"
      @remove-from-cart="removeFromCart"
      @remove-item="removeItem"
      @add-item="addItem"
      :key="notebook.id" />
  </div>
</template>

<script>
import NotebookItem from "./NotebookItem.vue";
export default {
  name: "NotebooksCartList",
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
    removeFromCart(notebookId) {
      this.$emit("removeFromCart", notebookId);
    },
    removeItem(notebookId) {
      this.$emit("removeItem", notebookId);
    },
    addItem(notebookId) {
      this.$emit("addItem", notebookId);
    },
  },
};
</script>
