<template>
  <div>
    <!-- 1 interpolation -->
    <div>
      Задача 1. Дано ПІБ та рік народження студента. Вивести на екран
      <div>
        ПІБ -
        <strong
          >{{ student.surname }} {{ student.firstName }}
          {{ student.lastName }}</strong
        >
      </div>
      <div>
        рік народження
        <strong>
          {{ student.bornYear }}
        </strong>
      </div>
    </div>
    <!-- 2 methods -->
    <div>
      <div>Задача 2. Дано два випадкові номери місяців. Вивести на екран</div>
      <div>
        Дано номер місяців (3)
        <strong>{{ randomMonth(3) }}</strong>
      </div>
      <div>
        Дано номер місяців random
        <strong>{{ randomMonth() }}</strong>
      </div>
    </div>
    <!-- 3 methods -->
    <div>
      Задача 3 Розробити конвертер валют. Вводиться курс долара, та кількість
      гривень. Вивести кількість доларів

      <div>
        <label>
          Вводиться курс долара
          <input type="number" v-model.number="dollarCourse" />
        </label>
        <label>
          Вводиться кількість гривен
          <input type="number" v-model.number="uanValue" />
        </label>

        <div v-if="dollarValue">
          кількість доларів
          <strong> {{ dollarValue }}$ </strong>
        </div>
      </div>
    </div>
    <!-- 4 methods -->
    <div>
      Задача 4 Задано початок та кінець діапазону. Випадковим чином генерувати
      значення з вказаного діапазону

      <div>
        <label>
          Вводиться початок діапазону
          <input type="number" v-model.number.lazy="start" />
        </label>
        <label>
          Вводиться кінець діапазону
          <input type="number" v-model.number.lazy="end" />
        </label>

        <div v-if="randNumber()">
          значення з вказаного діапазону
          <strong> {{ randNumber() }} </strong>
        </div>
      </div>
    </div>

    <!-- 5 computed get and set value -->
    <div>
      <fieldset>
        <label>
          Вводиться fullName
          <input type="text" v-model.trim.lazy="fullName" />
        </label>
        <div v-if="fullName">
          <hr />
          <div>get fullName {{ fullName }}</div>
          <hr />
          get
          <div>
            first name
            <strong> {{ firstName }}</strong>
          </div>
          and
          <div>
            second name
            <strong> {{ secondName }}</strong>
          </div>
        </div>
      </fieldset>
    </div>
    <!-- 6 computed -->
    <div>
      Задача 6 Вводиться кількість пасажирів. Вивести скільки потрібно автобусів
      (кожен автобус на 20 місць)

      <div>
        <label>
          Вводиться кількість пасажирів
          <input type="number" v-model.number="passengersNumber" />
        </label>

        <div>
          потрібно автобусів <strong> {{ needBuses }}</strong>
        </div>
      </div>
    </div>

    <!-- 7 events -->
    <div>
      <span>num1- {{ num1 }}</span>
      <span>num1 - {{ num2 }}</span>
      <br />
      <button @click="getSum">get sum</button>
      <div v-if="sum">sum = {{ sum }}</div>
    </div>
  </div>
</template>

<script>
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "jun",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
export default {
  name: "TaskLesson",
  components: {},
  data() {
    return {
      // 1
      student: {
        firstName: "Oleksandr",
        lastName: "Anatoliovnch",
        surname: "Smolyak",
        bornYear: 1976,
      },
      // 3
      uanValue: 0,
      dollarCourse: 0,
      // 4
      start: null,
      end: null,
      // 5
      firstName: "",
      secondName: "",

      // 6
      passengersNumber: null,
      // 7
      num1: 10,
      num2: 20,
      sum: null,
    };
  },
  computed: {
    // 3
    dollarValue() {
      if (!this.uanValue || !this.dollarCourse) return;
      return (this.uanValue / this.dollarCourse).toFixed(2);
    },
    // 5
    fullName: {
      get() {
        if (this.firstName && this.secondName)
          return `${this.firstName} ${this.secondName}`;
        return null;
      },
      set(newVal) {
        if (newVal) {
          const splitText = newVal.split(" ");
          if (splitText.length == 2) {
            this.firstName = splitText[0];
            this.secondName = splitText[1];
          }
        }
      },
    },
    // 6
    needBuses() {
      return Math.ceil(this.passengersNumber / 20);
    },
  },
  methods: {
    // 2
    randomMonth(value) {
      if (value && value < 12) return months[value];

      const randNumber = Math.floor(Math.random() * 11);
      return months[randNumber];
    },
    // 4
    randNumber() {
      if (!this.start || !this.end) return false;
      const rand =
        this.start + Math.floor(Math.random() * (this.end - this.start + 1));
      return rand;
    },
    // 7
    getSum() {
      this.sum = this.num1 + this.num2;
    },
  },
};
</script>
