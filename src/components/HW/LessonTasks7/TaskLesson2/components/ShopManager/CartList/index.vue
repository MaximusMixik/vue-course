<template>
  <fieldset v-if="cartList.length > 0 || isLoading">
    <legend>
      <h6>CartList</h6>
    </legend>
    <LoadingComp v-if="isLoading" />
    <ErrorComp v-else-if="error" :error="error" />
    <ul v-else>
      <li v-for="product in cartList" :key="product.id" class="row">
        <strong>
          {{ product.name }}
        </strong>
        <div class="row">
          <span> {{ product.price.toFixed(2) }} {{ currency.symbol }} </span>
          <button @click="removeFromCart(product.id)">Remove from cart</button>
        </div>
      </li>
    </ul>
    <!--  v-if="totalCartPrice > 0" -->
    <div class="row">
      <strong> Total price </strong>
      <div class="row">
        <span> {{ totalCartPrice }} {{ currency.symbol }} </span>
        <button @click="byeAll">Bye All products</button>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ErrorComp from "../../ErrorComp.vue";
import LoadingComp from "../../LoadingComp.vue";
export default {
  name: "CartList",
  components: {
    ErrorComp,
    LoadingComp,
  },
  computed: {
    ...mapGetters([
      "currency",
      "cartList",
      "totalCartPrice",
      "isLoading",
      "error",
    ]),
  },
  methods: {
    ...mapActions(["loadCartList", "byeAll", "removeFromCart"]),
  },
  mounted() {
    this.loadCartList();
  },
};
</script>
<style scoped>
.row {
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
</style>
