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

      <div>
        <button @click="removeItem(notebook.id)">remove</button>
        <strong>count {{ notebook.count }}</strong>
        <button @click="addItem(notebook.id)">add more</button>
      </div>
      <div style="display: flex">
        price {{ notebook.price }}
        <button @click="removeFromCart(notebook.id)">remove From Cart</button>
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
    removeFromCart(notebookId) {
      this.$emit("removeFromCart", notebookId);
    },
    removeItem(notebookId) {
      if (this.notebook.count <= 1) {
        this.removeFromCart(notebookId);
        return;
      }

      this.$emit("removeItem", notebookId);
    },
    addItem(notebookId) {
      this.$emit("addItem", notebookId);
    },
  },
};
</script>
