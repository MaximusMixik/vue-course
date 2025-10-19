<template>
  <h2>Задача 3.</h2>

  <h6>Shop</h6>
  <NotebooksList :notebook-list="list" @add-to-cart="addToCart" />
  <br />
  <template v-if="cart.length > 0">
    <hr />
    <h6>Cart</h6>
    <br />
    <NotebooksCartList
      :notebook-list="cart"
      @remove-from-cart="removeFromCart"
      @remove-item="removeItem"
      @add-item="addItem" />
  </template>
</template>

<script>
import NotebooksList from "./components/NotebooksList";
import NotebooksCartList from "./components/NotebooksCartList";
import { notebooksList } from "../constants/3_data_notebooks";
export default {
  name: "TaskLesson6",
  components: {
    NotebooksList,
    NotebooksCartList,
  },
  data() {
    return {
      list: notebooksList,
      cart: [],
    };
  },
  computed: {},
  methods: {
    removeItem(notebookId) {
      const notebookIndex = this.cart.findIndex(
        (notebook) => notebook.id === notebookId
      );
      this.cart[notebookIndex].count--;
    },
    addItem(notebookId) {
      const notebookIndex = this.cart.findIndex(
        (notebook) => notebook.id === notebookId
      );
      this.cart[notebookIndex].count++;
    },
    addToCart(notebookId) {
      const notebookIndex = this.list.findIndex(
        (notebook) => notebook.id === notebookId
      );

      const notebook = {
        ...this.list[notebookIndex],
        count: 1,
      };

      // counter logic
      // if (this.cart.length > 0) {
      //   const findSameNotebooksIndex = this.cart.findIndex(
      //     (notebook) => notebook.id === notebookId
      //   );
      //   if (findSameNotebooksIndex >= 0) {
      //     this.cart[findSameNotebooksIndex].count++;
      //   }
      // }
      const findSameNotebooksIndex = this.cart.findIndex(
        (notebook) => notebook.id === notebookId
      );

      if (findSameNotebooksIndex >= 0) {
        this.cart[findSameNotebooksIndex].count++;
      } else {
        this.cart.push(notebook);
      }
    },
    removeFromCart(notebookId) {
      const notebookIndex = this.cart.findIndex(
        (notebook) => notebook.id === notebookId
      );
      this.cart.splice(notebookIndex, 1);
    },
  },

  watch: {
    cart: {
      handler() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
      deep: true,
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  },
};
</script>
