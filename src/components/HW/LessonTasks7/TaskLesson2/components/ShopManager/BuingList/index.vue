<template>
  <fieldset v-if="byeList.length > 0">
    <legend>
      <h6>Buing list</h6>
    </legend>
    <ul>
      <li v-for="product in byeList" :key="product.id" class="row">
        <strong>
          {{ product.name }}
        </strong>
        <div class="row">
          <span> {{ product.price }} {{ currency.symbol }} </span>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BuingList",
  computed: {
    ...mapGetters(["currency", "byeList"]),
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
