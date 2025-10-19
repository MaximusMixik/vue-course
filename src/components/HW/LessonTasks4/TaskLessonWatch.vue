<template>
  <div>
    <div>
      <label>
        input your age
        <input type="number" ref="ageInput" v-model.number="userAge" />
      </label>
      <!-- 1 computed  -->
      <br />
      computed -{{ userAge }}
      <br />
      data - {{ userAgeValue }}
      <!-- 2 watch  -->
      <br />
      watch - {{ userAgeWatched }}
    </div>

    <fieldset>
      <legend><h4>user data</h4></legend>
      <br />
      <label>
        User name
        <input type="text" v-model.trim="user.name" />
      </label>
      <br />
      <label>
        User password
        <input type="text" v-model.trim="user.password" />
      </label>
      <br />
      <label>
        User age
        <input type="number" v-model.number="user.age" />
      </label>
    </fieldset>
  </div>
</template>

<script>
// https://ua.vuejs.org/guide/essentials/template-refs.html
export default {
  name: "TaskLessonRef",
  data() {
    return {
      // 1
      userAgeValue: null,
      userAgeWatched: null,
      // 3
      user: {
        name: null,
        age: null,
        password: null,
      },
    };
  },
  computed: {
    // 1
    userAge: {
      get() {
        return this.userAgeValue;
      },
      set(newVal) {
        // can add condition like this
        // if (newVal < this.age) alert("smaller");
        this.userAgeValue = newVal;
      },
    },
  },
  watch: {
    // 2
    userAgeValue(newVal, oldVal) {
      console.log(newVal, oldVal);
      // can add condition
      this.userAgeWatched = newVal;
    },
    // 3
    user: {
      handler() {
        // newVal, oldVal
        localStorage.setItem("user", JSON.stringify(this.user));
      },
      deep: true,
    },
  },
  methods: {},
  // 1
  mounted() {
    if (!this.age) {
      this.$refs.ageInput.focus();
    }
  },
};
</script>
