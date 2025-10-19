<template>
  <div>
    <h6>
      Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у
      список “Очікують на виконання”, якщо повар береться робити — замовлення
      переходить у список “Виконуються”, якщо замовлення виконано — переходить у
      список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з
      таблиці
    </h6>

    <fieldset>
      <label> new food <input type="text" v-model="newOrder" /></label>
      <button @click="addToPending">ADD</button>
    </fieldset>

    <div
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px">
      <div>
        Очікують на виконання
        <div v-for="item in pending" :id="item.id" :key="item.id">
          {{ item.name }}
          <button @click="addToPerformed(item.id)">go to next step</button>
        </div>
      </div>
      <div>
        “Виконуються”
        <div v-for="item in performed" :id="item.id" :key="item.id">
          {{ item.name }}
          <button @click="addToReadyToRemoval(item.id)">go to next step</button>
        </div>
      </div>
      <div>
        Готові до виносу
        <div v-for="item in readyToRemoval" :id="item.id" :key="item.id">
          {{ item.name }}
          <button @click="removeFromTable(item.id)">go to next step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLesson6",
  data() {
    return {
      newOrder: "",
      pending: [],
      performed: [],
      readyToRemoval: [],
    };
  },
  computed: {},
  methods: {
    addToPending() {
      const date = new Date();
      this.pending.push({ name: this.newOrder, id: date.getTime() });
      this.newOrder = "";
    },
    addToPerformed(id) {
      const searchItem = this.pending.findIndex((el) => el.id === id);
      this.performed.push(...this.pending.splice(searchItem, 1));
    },
    addToReadyToRemoval(id) {
      const searchItem = this.performed.findIndex((el) => el.id === id);
      this.readyToRemoval.push(...this.performed.splice(searchItem, 1));
    },
    removeFromTable(id) {
      const searchItem = this.readyToRemoval.findIndex((el) => el.id === id);
      this.readyToRemoval.splice(searchItem, 1);
    },
  },
};
</script>
