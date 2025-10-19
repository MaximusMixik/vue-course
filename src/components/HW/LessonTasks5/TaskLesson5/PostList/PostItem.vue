<template>
  <div class="item">
    <div class="item__container">
      <img
        v-if="itemData.logo"
        :src="itemData.logo"
        class="item__logo"
        alt="logo" />
      <span class="item__logo" v-else>{{ itemData.userName[0] }}</span>
      <div class="item__content">
        <div v-if="itemData.userName" class="item__name">
          {{ itemData.userName }}
        </div>
        <div v-else class="item__email">{{ itemData.userEmail }}</div>

        <div class="item__message">{{ itemData.message }}</div>
        <div class="item__actions">
          <!-- onLike -->
          <button class="item__button" @click="$emit('like')">Like</button>
          <span>
            {{ itemData.likes }}
          </span>
          <!-- onDislike -->
          <button class="item__button" @click="$emit('dislike')">
            Dislike
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.item {
}
.item__container {
  display: flex;
  gap: 20px;
}
.item__content {
  display: grid;
  gap: 12px;
}
.item__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
}
span.item__logo {
  display: grid;
  place-items: center;
  background: violet;
}
.item__name {
}
.item__email {
}
.item__message {
}
.item__actions {
  display: flex;
  gap: 16px;
  align-items: center;
}
.item__button {
}
</style>
