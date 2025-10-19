<template>
  <div style="display: grid; gap: 24px; grid-template-columns: repeat(3, 1fr)">
    <RaspberryItem v-for="item in itemsData" :item-data="item" :key="item.id" />
  </div>
</template>

<script>
import RaspberryItem from "./RaspberryItem.vue";
export default {
  components: {
    RaspberryItem,
  },

  props: {
    itemsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
