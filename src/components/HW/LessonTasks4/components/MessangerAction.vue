<template>
  <div>
    <span>{{ itemData.title }} </span>
    <button @click="onLike(itemData.id, )">Like</button>
    <button @click="onDislike(itemData.id)">Dislike</button>
    <span>Likes {{ itemData.likes }} </span>
  </div>
</template>

<script>
export default {
  name: "MessangerAction",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onLike(id) {
      this.$emit("like", id);
    },
    onDislike(id) {
      this.$emit("dislike", id);
    },
  },
};
</script>
