<template>
  <div>
    <!-- 1 simple $ref  -->
    <div>
      <h5>
        Приклад. При відкритті сайту перевіряється вік користувача. 1)якщо не
        ввів, просимо ввести (поміщаємо фокус в елемент вводу) 2)якщо вік менше
        18 років – доступ заборонено 3)якщо вік більше за 18 років – доступ
        дозволено
      </h5>

      <label>
        input your age
        <input type="number" ref="ageInput" v-model.number="age" />
      </label>
      <div>{{ message }}</div>
    </div>
    <!-- 2 couple $ref  -->
    <div>
      <h5>
        Приклад. Вводиться логін і пароль. Поступово якщо якесь з полів не
        введено, то виводити повідомлення і поміщати фокус у потрібне пол
      </h5>

      <label>
        input your login
        <input type="text" ref="loginInput" v-model.trim="login" />
      </label>
      <label>
        input your age
        <input type="password" ref="passwordInput" v-model.trim="password" />
      </label>
      <button @click="send">Go</button>
      <div v-show="formMessage">{{ formMessage }}</div>
    </div>

    <!-- 3 $ref in array -->
    <div>
      <h5>
        Приклад. Вводиться логін і пароль. Поступово якщо якесь з полів не
        введено, то виводити повідомлення і поміщати фокус у потрібне пол
      </h5>
      <label v-for="i in 5" :key="i">
        mark #{{ i }}
        <input ref="mark" v-model="marks[i - 1]" type="text" />
        <br />
      </label>
      <div>
        {{ listMessage }}
      </div>
      <button @click="onSend">Send</button>
    </div>
  </div>
</template>

<script>
// https://ua.vuejs.org/guide/essentials/template-refs.html
export default {
  name: "TaskLessonRef",
  data() {
    return {
      // 1
      age: null,
      message: null,
      // 2
      login: null,
      password: null,
      formMessage: null,

      // 3
      marks: [],
      listMessage: null,
    };
  },
  computed: {},
  methods: {
    // 2
    send() {
      if (!this.login) {
        this.$refs.loginInput.focus();
        this.formMessage = "input your login";
      } else if (!this.password) {
        this.$refs.passwordInput.focus();
        this.formMessage = "input your password";
      } else this.formMessage = null;
    },
    // 3
    onSend() {
      for (let i = 0; i < this.$refs.mark.length; i++) {
        if (!this.marks[i]) {
          this.$refs.mark[i].focus();
          this.listMessage = `input value in ${i + 1}`;
          break;
        }
      }
    },
  },
  // 1
  mounted() {
    if (!this.age) {
      this.$refs.ageInput.focus();
      // this.$refs["nameInput"].focus();
      this.message = "просимо ввести age";
    } else {
      if (this.age < 18) this.message = "доступ заборонено";
      else this.message = "доступ дозволено";
    }
  },
};
</script>
