<template>
  <fieldset>
    <legend>
      <h4>
        Задача 3. Розробити компонент (з підтримкою v-model), який дозволяє
        вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка
        «@inv.mn.edu» додається автоматично (користувач не вводить її). При
        заданні модифікатора check відображати червоним фоном input, якщо
        некоректний.
      </h4>
    </legend>
    <div>
      <CustomInput v-model.check="email" label="Your Email" />
    </div>
    <div>
      {{ addDomain }}
    </div>
  </fieldset>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  name: "TaskLesson3",
  data() {
    return {
      email: null,
    };
  },
  components: {
    CustomInput,
  },
  computed: {
    addDomain() {
      if (!this.email) return;
      return `${this.email}@inv.mn.edu`;
    },
  },
  methods: {},
};
</script>
