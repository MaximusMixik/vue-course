<template>
  <div>
    <CurrencyItem />
    <ProductList />
    <CartList />
    <BuingList />
  </div>
</template>

<script>
import CurrencyItem from "./CurrencyItem.vue";
import ProductList from "./ProductList";
import CartList from "./CartList";
import BuingList from "./BuingList";
export default {
  name: "ShopManager",
  components: {
    CurrencyItem,
    ProductList,
    CartList,
    BuingList,
  },
};
</script>
