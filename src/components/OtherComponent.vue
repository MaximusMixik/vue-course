<template>
  <div><h1>OtherComponent</h1></div>
  <div v-for="(worker, ind) in workers" :key="ind">
    {{ worker }}
  </div>
</template>

<script>
export default {
  name: "OtherComponent",
  data() {
    return {
      workers: ["Ivan", "Petro", "Olga"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
