<template>
  <fieldset>
    <legend><h4>user Characteristics</h4></legend>
    <CustomInput
      v-model="age"
      label="User age"
      :status-color="ageStatusColor" />
    <div v-show="age">user age {{ age }}</div>

    <br />

    <CustomInput
      v-model="height"
      label="User height"
      :status-color="heightStatusColor" />
    <div v-show="height">user height {{ height }}</div>

    <br />

    <CustomInput
      v-model="chargeLevel"
      label="User charge Level"
      :status-color="chargeLevelStatus"
      :revers="true" />
    <div v-show="chargeLevel">user chargeLevel {{ chargeLevel }}</div>
  </fieldset>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  name: "TestLesson",
  data() {
    return {
      age: null,
      height: null,
      chargeLevel: null,
    };
  },
  components: {
    CustomInput,
  },
  computed: {
    ageStatusColor() {
      return {
        min: 18,
        mid: 35,
        max: 50,
      };
    },
    heightStatusColor() {
      return {
        min: 140,
        mid: 160,
        max: 190,
      };
    },
    chargeLevelStatus() {
      return {
        min: 10,
        mid: 50,
        max: 90,
      };
    },
  },
};
</script>
