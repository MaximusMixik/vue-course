<template>
  <fieldset>
    <legend>
      <h4>
        Задача 4. Розробити компонент для вводу віку користувача та імені.
        Робити форматування при заданні відповідних модифікаторів відповідних
        полів input: ім’я користувача - у випадку порожнього поля (червони фон)
        вік (вік менший за 18 – колір фону червоний, інакше – зелений).
      </h4>
    </legend>
    <div>
      <input-component
        v-model:name.check="userName"
        v-model:age.check="userAge" />
      <!-- <div>{{ userName }} = {{ userAge }}</div> -->
    </div>
  </fieldset>
</template>

<script>
import InputComponent from "./InputComponent.vue";
export default {
  name: "TaskLesson4",
  components: {
    InputComponent,
  },
  data() {
    return {
      userName: null,
      userAge: null,
    };
  },
  computed: {},
  methods: {},
};
</script>
