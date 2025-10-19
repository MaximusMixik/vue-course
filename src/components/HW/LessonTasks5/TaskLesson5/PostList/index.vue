<template>
  <div class="container">
    <PostItem
      v-for="item in list"
      :key="item.id"
      :item-data="item"
      @dislike="$emit('dislike', item.id)"
      @like="$emit('like', item.id)" />
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  gap: 30px;
}
</style>
