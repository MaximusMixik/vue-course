<template>
  <div>
    <h5>
      Задача 3. Задано початок та кінець діапазону. При натисканні на кнопку
      випадковим чином генерувати значення з вказаного діапазону та відображати
      його.
    </h5>
    <fieldset>
      <label>
        Задано початок діапазону
        <input type="number" v-model.number="start" />
      </label>
      <label>
        та кінець діапазону
        <input type="number" v-model.number="end" />
      </label>
      <div>
        <button @click="getRandom">
          генерувати значення з вказаного діапазону
        </button>
        <div v-show="randomValue">
          {{ randomValue }}
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskLesson3",
  data() {
    return {
      start: null,
      end: null,
      randomValue: null,
    };
  },
  computed: {},
  methods: {
    getRandom() {
      if (this.start > this.end) {
        let tmp = this.start;
        this.start = this.end;
        this.end = tmp;
      }
      this.randomValue =
        Math.floor(Math.random() * (this.end - this.start + 1)) + this.start;
    },
  },
};
</script>
