<template>
  <div>
    <h6>
      Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо 1)
      бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано
      коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
      2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні
      хмарки.
    </h6>

    <fieldset>
      <select v-model="ticketClass">
        <option disabled value="">Please select one</option>
        <option value="business">бізнес</option>
        <option value="economy">економ</option>
      </select>

      <template v-if="ticketClass">
        <div v-if="ticketClass === 'business'">
          <select v-model="businessAssortment">
            <option disabled value="">Please select one</option>
            <option value="magazine">газети</option>
            <option value="cognac">коньяку</option>
          </select>
          <div v-if="businessAssortment === 'cognac'">
            <label>
              do you want snacks?
              <input type="checkbox" v-model="snacks" />
              {{ snacks ? "yes" : "no" }}
            </label>
          </div>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image" />
        </div>
        <div v-else-if="ticketClass === 'economy'">
          <select v-model="economyAssortment">
            <option disabled value="">Please select one</option>
            <option value="beer">пива</option>
            <option value="chips">чипсів</option>
          </select>
          <img
            src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWRzfGVufDB8fDB8fHww"
            alt="Image" />
        </div>
      </template>
    </fieldset>
  </div>
</template>

<script>
// h
export default {
  name: "TaskLesson2",
  data() {
    return {
      ticketClass: "",
      businessAssortment: "",
      economyAssortment: "",
      snacks: false,
    };
  },
  computed: {},
  methods: {},
};
</script>
