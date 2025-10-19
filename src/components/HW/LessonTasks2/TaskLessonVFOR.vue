<template>
  <div>
    <!-- 1 v-for -->
    <div>
      <h6>Приклад. Згенерувати 15 рандомних чисел (від 0 до 10)</h6>
      <ul>
        <li v-for="i in 15" :key="i">{{ i }} - {{ getRand() }}</li>
      </ul>
    </div>

    <!-- 2 v-for -->
    <div>
      <h6>
        Приклад. Дано масив з побажаннями. Вибрати випадковим чином 4 із них
      </h6>

      <template v-for="i in 4" :key="i">
        {{ i }}){{ randWishes() }}
        <br />
      </template>
    </div>

    <!-- 3 v-for mutation (change array) -->

    <!-- <div>
      <h6>
        Приклад. Розробити список покупок. Корстувач у формі поступово додає
        назву товару і кількість і товари поступово додаються у список покупок
      </h6>

      <fieldset>
        <label>
          назву товару
          <input type="text" v-model.trim.lazy="productName" />
        </label>
        <label>
          кількість
          <input type="number" v-model.number="productNumber" />
        </label>
        <button @click="addToList">add To List</button>
      </fieldset>

      <ul v-show="productList.length > 0">
        <li v-for="pr in productList" :id="pr.id" :key="pr.id">
          <h5>
            {{ pr.title }}
          </h5>
          <div>
            count :<strong>{{ pr.value }}</strong>
          </div>
        </li>
      </ul>
    </div> -->

    <!-- 4 -->
    <div>
      <h5>
        Прилад. Вивести дані, які представлені у об’єкті (title - visitors
      </h5>
      <ul>
        <li v-for="(obj, season, ind) in list" :key="ind">
          <div v-for="(val, key, ind) in obj" :key="ind">
            <!-- {{ val }} {{ key }} -->
            <template v-if="key === 'title'"> {{ val }} - {{ key }} </template>
            <template v-else-if="key === 'visitors'">
              {{ val }} - {{ key }}
            </template>
          </div>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLessonVFOR",
  data() {
    return {
      // 3
      productName: "",
      productNumber: null,
      productList: [],
    };
  },
  computed: {
    // 4
    list() {
      return seasonsReport;
    },
  },
  methods: {
    // 1
    getRand(min = 0, max = 100) {
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    // 2
    randWishes() {
      return wishesList[this.getRand(0, wishesList.length - 1)];
    },

    // 3
    addToList() {
      const date = new Date();
      this.productList.push({
        id: date.getTime(),
        title: this.productName,
        value: this.productNumber,
      });
      this.clearInputs();
    },
    clearInputs() {
      this.productName = "";
      this.productNumber = null;
    },
  },
};
const wishesList = [
  "Міцного здоров'я!",
  "Щастя та добробуту!",
  "Успіхів у всіх починаннях!",
  "Мирного неба над головою!",
  "Взаємної любові та розуміння!",
  "Невичерпної енергії та натхнення!",
  "Здійснення найзаповітніших мрій!",
  "Яскравих емоцій та незабутніх моментів!",
  "Фінансової стабільності та процвітання!",
  "Вірних друзів та надійних партнерів!",
];

const seasonsReport = {
  spring: {
    title: "Весна",
    averaheTemp: 12,
    visitors: 1239,
  },
  summer: {
    title: "Літо",
    averaheTemp: 32,
    visitors: 6231,
  },
  fall: {
    title: "Осінь",
    averaheTemp: 20,
    visitors: 2230,
  },
  winter: {
    title: "Зима",
    averaheTemp: 10,
    visitors: 210,
  },
};
</script>
