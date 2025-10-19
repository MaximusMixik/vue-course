<template>
  <div>
    <label>
      <div>User Name</div>
      <input type="text" v-model="nameValue" :class="nameClass" />
    </label>
    <label>
      <div>User Age</div>
      <input type="number" v-model.number="ageValue" :class="ageClass" />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      nameClass: null,
      ageClass: null,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    nameModifiers: {
      default: () => ({}),
    },
    age: {
      type: Number,
      default: null,
    },
    ageModifiers: {
      default: () => ({}),
    },
  },

  computed: {
    nameValue: {
      get() {
        return this.name;
      },
      set(newVal) {
        if (this.nameModifiers.check) {
          this.nameClass = newVal ? "" : "red";
        }
        this.$emit("update:name", newVal);
      },
    },
    ageValue: {
      get() {
        return this.age;
      },
      set(newVal) {
        if (this.ageModifiers.check && newVal) {
          if (newVal >= 18) {
            this.ageClass = "green";
          } else this.ageClass = "red";
        }
        this.$emit("update:age", newVal);
      },
    },
  },
};
</script>

<style scoped>
.red {
  background: red;
}
.green {
  background: green;
}
</style>
