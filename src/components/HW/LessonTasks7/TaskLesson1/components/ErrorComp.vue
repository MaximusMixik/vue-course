<template>
  <div>ErrorComp {{ error }}</div>
</template>

<script>
export default {
  name: "ErrorComp",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
