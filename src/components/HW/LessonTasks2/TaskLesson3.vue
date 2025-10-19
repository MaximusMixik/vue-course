<template>
  <div>
    <h6>
      Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і
      слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу
      «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то
      відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
    </h6>

    <fieldset :class="[{ [borderState]: answer !== null }, 'card']">
      <img :src="translator.image" class="image" alt="Image" />
      <div>word - {{ translator.word }}</div>
      <input type="text" v-model.trim="userResponse" />
      <button @click="checkAnswer">Check</button>
      <div v-if="answer !== null">
        <div v-if="answer">Добре. Молодець!</div>
        <div v-else>Невірно, спробуйте ще раз</div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const wordTrenager = {
  image:
    "https://images.unsplash.com/photo-1609114215069-74764924d06b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  word: "dishes",
  translation: "посуд",
};
export default {
  name: "TaskLesson3",
  data() {
    return {
      userResponse: "",
      answer: null,
    };
  },
  computed: {
    translator() {
      return wordTrenager;
    },
    borderState() {
      return this.answer ? "green" : "red";
    },
  },
  methods: {
    checkAnswer() {
      this.answer =
        this.translator.translation.toLowerCase() ===
        this.userResponse.toLowerCase();
      if (!this.answer) this.clearInput();
    },
    clearInput() {
      this.userResponse = "";
      // remove error state
      setTimeout(() => {
        this.answer = null;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  max-width: 300px;
  width: 100%;
  display: grid;
  gap: 12px;
}
.image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.red {
  border: 2px solid red;
}
.green {
  border: 2px solid green;
}
</style>
