<template>
  <FavoriteItem v-for="item in itemsData" :item-data="item" :key="item.id" />
</template>

<script>
import FavoriteItem from "./FavoriteItem.vue";
export default {
  components: {
    FavoriteItem,
  },

  props: {
    itemsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
