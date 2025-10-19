<template>
  <div style="display: flex">
    <!-- a :href="notebook.link" target="_blank" -->
    <img
      :src="notebook.imgSrc"
      style="width: 200px; flex-shrink: 0"
      alt="Image" />
    <div>
      <h5>{{ notebook.title }}</h5>
      <div>discount {{ notebook.discount }}</div>
      <div>oldPrice {{ notebook.oldPrice }}</div>
      <div style="display: flex">
        price {{ notebook.price }}
        <button @click="addToCart(notebook.id)">Bue Notebook</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotebookItem",
  props: {
    notebook: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    addToCart(notebookId) {
      this.$emit("addToCart", notebookId);
    },
  },
};
</script>
