<template>
  <h2>
    <!-- Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити
    шлях до файлу js (URL, що закінчується розширенням js). При заданні
    модифікатора checkPath відображати червоним фоном input, якщо шлях
    некоректний. -->
    Задача 2. Розробити Vue-компонент з підтримкою v-model, який дозволяє
    вводити шлях до JavaScript-файлу (URL, що закінчується на .js). Додатково:
    Якщо до v-model додано модифікатор checkPath (тобто використано
    v-model:checkPath), компонент повинен перевіряти правильність шляху. У разі,
    якщо шлях некоректний (наприклад, не є URL або не закінчується на .js), поле
    вводу (input) має підсвічуватися червоним фоном.
  </h2>
  <div>
    <CustomInput v-model="path" />
  </div>

  <img :src="path" alt="Image" />
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  name: "TaskLesson2",
  data() {
    return {
      path: "",
    };
  },
  components: {
    CustomInput,
  },
  computed: {},
  methods: {},
};
</script>
