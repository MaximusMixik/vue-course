<template>
  <div>
    {{ item.name }}
    <button @click="onLike">Like</button>
    <button @click="onDislike" :disabled="item.likes === 0">Dislike</button>
    <span>
      Likes:
      {{ item.likes }}
    </span>
  </div>
</template>

<script>
export default {
  name: "QuantityItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onDislike() {
      this.$emit("removeLike", this.item.id);
    },
    onLike() {
      this.$emit("addLike", this.item.id);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  gap: 10px;
}
</style>
