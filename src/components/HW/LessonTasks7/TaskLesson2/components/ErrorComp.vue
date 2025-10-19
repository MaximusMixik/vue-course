<template>
  <div>
    Error <strong>{{ error }}</strong>
  </div>
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
