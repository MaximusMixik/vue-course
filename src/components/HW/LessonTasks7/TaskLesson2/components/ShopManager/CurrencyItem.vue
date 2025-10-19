<template>
  <div class="row">
    <h6>Welcome to our website!</h6>
    <select v-model="currencyValue">
      <option disabled value="">Please select currency</option>
      <option
        v-for="currency in currencyList"
        :key="currency.id"
        :value="currency">
        {{ currency.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CurrencyItem",
  computed: {
    ...mapGetters(["currency", "currencyList"]),
    currencyValue: {
      get() {
        return this.currency;
      },
      set(newVal) {
        this.setCurrency(newVal);
      },
    },
  },
  methods: {
    ...mapActions(["setCurrency"]),
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
