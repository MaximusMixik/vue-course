<template>
  <a href="#" style="display: grid; gap: 8px">
    <img
      :src="itemData.imgSrc"
      alt="Image"
      style="max-width: 100%; width: 100%; height: 200px; object-fit: cover" />
    <div>
      <div style="display: flex; gap: 8px">
        <img
          :src="itemData.logo"
          alt="logo"
          style="width: 20px; height: 20px; object-fit: contain" />
        <span>
          {{ itemData.companyTitle }}
        </span>
      </div>
    </div>
    <div>
      {{ itemData.description }}
    </div>
  </a>
</template>

<script>
export default {
  name: "RaspberryItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
