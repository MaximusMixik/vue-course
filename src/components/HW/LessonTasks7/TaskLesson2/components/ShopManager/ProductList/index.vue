<template>
  <fieldset v-if="productList.length > 0 || isLoading">
    <legend>
      <h6>ProductList</h6>
    </legend>
    <LoadingComp v-if="isLoading" />
    <ErrorComp v-else-if="error" :error="error" />
    <ul v-else>
      <li v-for="product in productList" :key="product.id" class="row">
        <strong>
          {{ product.name }}
        </strong>
        <div class="row">
          <span> {{ product.price.toFixed(2) }} {{ currency.symbol }} </span>
          <button @click="addToCartAndClearField(product)">Add to cart</button>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ErrorComp from "../../ErrorComp.vue";
import LoadingComp from "../../LoadingComp.vue";
export default {
  name: "ProductList",

  components: {
    ErrorComp,
    LoadingComp,
  },
  computed: {
    ...mapGetters([
      "productList",
      "error",
      "isLoading",
      "currency",
      "currencyList",
    ]),
  },
  methods: {
    ...mapActions(["loadProductList", "addToCartAndClearField"]),
  },
  mounted() {
    this.loadProductList();
  },
};
</script>
<style scoped>
.row {
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
</style>
