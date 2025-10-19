<template>
  <div>
    <h6>
      Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл.
      Якщо ні, то: 1) якщо логін = Іван – колір повідомлення про помилку синій
      2) якщо хтось інший, то колір повідомлення червоний
    </h6>

    <div>
      <fieldset>
        <label>
          Вводимо логін
          <input type="text" v-model.lazy="login" />
        </label>
        <label>
          Вводимо пароль
          <input type="text" v-model="password" />
        </label>
      </fieldset>
      <template v-if="isValidInput">
        <div v-if="isCorrectLogin">smile =)</div>
        <div v-else :class="[isIvanLogin]">повідомлення про помилку</div>
      </template>
    </div>
  </div>
</template>

<script>
const users = [{ login: "admin", password: "123" }];
export default {
  name: "TaskLesson1",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  computed: {
    isValidInput() {
      return this.login && this.password;
    },
    isCorrectLogin() {
      return users.some((el) => el.login === this.login);
    },
    isIvanLogin() {
      return this.login === "Ivan" ? "blue" : "red";
    },
  },
  methods: {},
};
</script>

<style scoped>
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
</style>
