<template>
  <a :href="itemData.link">
    <img :src="itemData.imgSrc" :alt="itemData.title" />
    <div>
      {{ itemData.title }}
    </div>
  </a>
</template>

<script>
export default {
  name: "FavoriteList",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
a {
  text-align: center;
}
img {
  max-width: 100%;
  height: 80px;
  width: 80px;
  object-fit: contain;
  margin-bottom: 12px;
}
</style>
