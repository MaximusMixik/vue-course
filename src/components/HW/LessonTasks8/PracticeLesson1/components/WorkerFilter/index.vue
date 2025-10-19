<template>
  <fieldset>
    <legend>
      <h6>WorkerFilter</h6>
    </legend>
    <FilterInput />
    <UploadComp />
  </fieldset>
</template>

<script>
import FilterInput from "./FilterInput.vue";
import UploadComp from "./UploadComp.vue";
export default {
  name: "WorkerFilter",
  components: {
    FilterInput,
    UploadComp,
  },
};
</script>
