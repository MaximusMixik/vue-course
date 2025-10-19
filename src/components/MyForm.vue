<template>
  <div>
    <!-- 1 -->
    <fieldset>
      <legend>User Data</legend>
      <label>
        User Name
        <input type="text" ref="name" v-model.trim="user.name" />
      </label>
      <label>
        User Age
        <input type="text" ref="age" v-model.trim="user.age" />
      </label>
      <hr />
      <button @click="onSubmit">Submit</button>
      <span v-if="message">{{ message }}</span>
    </fieldset>

    <br />

    <!-- 2 -->
    <fieldset>
      <div v-for="ind in 3" :key="ind">
        <label>
          score # {{ ind }}
          <input ref="mark" type="number" v-model.number="marks[ind - 1]" />
        </label>
      </div>
      <button @click="getMinMark">min mark</button>
      <div v-if="marksMessage">{{ marksMessage }}</div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 1
      user: {
        age: "",
        name: "",
      },
      message: null,
      // 2
      marks: [],
      marksMessage: null,
    };
  },
  computed: {},
  methods: {
    // if we have repeat elemets (in array)
    getMinMark() {
      let notValidInputIndex = -1;
      for (let i = 0; i < 3; i++) {
        if (!this.marks[i]) {
          notValidInputIndex = i;
          break;
        }
      }
      if (notValidInputIndex !== -1) {
        this.$refs.mark[notValidInputIndex].focus();
        this.marksMessage = `add mark #${notValidInputIndex + 1}`;
        // return
      } else {
        this.marksMessage = `result mark ${Math.min(...this.marks)}`;
      }
    },
    // if we need focus in empty element
    onSubmit() {
      if (!this.user.name) {
        this.$refs.name.focus();
        this.message = "input user name";
      } else if (!this.user.age) {
        this.$refs.age.focus();
        this.message = "input user age";
      } else this.message = "success";
    },
    // if one element is clear
    // onSubmit() {
    //   if (!this.user.age) {
    //     this.$refs.age.focus();
    //     this.message = "просимо ввести вік користувача";
    //   } else {
    //     if (this.user.age < 18) {
    //       this.message = "доступ заборонено";
    //     } else {
    //       this.message = "доступ дозволен";
    //     }
    //     // this.message =
    //     // this.user.age < 18 ? "доступ заборонено" : "доступ дозволен";
    //   }
    // },
  },
  mounted() {
    console.log(this.$refs);
    this.$refs.name.focus();
  },
};
</script>

<style lang="scss" scoped></style>
