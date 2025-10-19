<template>
  <div>
    <h5>
      Задача 5. Додаток містить масив об’єктів (логін, пароль) -- інсуючі логіни
      і паролі. Користувач вводить логін і пароль, а програма повідомляє чи може
      користувач бути авторизованим (чи є він одним з масиву)
    </h5>

    <fieldset>
      <label>
        Користувач вводить логін
        <input type="text" v-model.trim="login" />
      </label>
      <br />
      <label>
        Користувач вводить пароль
        <input type="password" v-model.trim="password" />
      </label>

      <br />
      <button :disabled="!userInputData" @click="sendData">Send</button>

      <div v-if="status">
        <hr />
        <div v-if="status === 'authorized'">
          користувач може бути авторизованим =)
        </div>
        <div v-else>користувач не можу бути авторизованим !!!</div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const users = [
  {
    login: "Max",
    password: "1234",
  },
  {
    login: "Andry",
    password: "Andry",
  },
];

export default {
  name: "TaskLesson5",
  data() {
    return {
      password: "",
      login: "",
      status: null,
    };
  },
  computed: {
    usersData() {
      return users;
    },

    userInputData() {
      return this.password && this.login;
    },
  },
  methods: {
    sendData() {
      const res = this.usersData.find(
        (user) => user.login === this.login && user.password === this.password
      );

      if (res) {
        this.status = "authorized";
        this.clearFields();
      } else this.status = "unautorized";

      console.log(this.status);
    },
    clearFields() {
      this.password = null;
      this.login = null;
    },
  },
};
</script>
