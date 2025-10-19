<template>
  <div>
    <!-- 1 hooks  -->
    <div>
      <h6>
        Приклад. Після створення запустити таймер для відображення поточного
        часу
      </h6>

      <fieldset>
        <legend>
          {{ currentTime }}
        </legend>
      </fieldset>
    </div>
    <!-- 2 server -->
    <div>
      <h6>
        Приклад. Після створення зробити запит на сервер для завантаження даних
      </h6>
    </div>
    <!-- 3 -->
    <div>
      <h6>
        Приклад. На сайті робиться перевірка віку користувача. Після
        завантаження сайту встановити фокус у поле введення віку
      </h6>
      <label>
        input your age
        <input type="number" ref="ageInput" v-model.number="age" />
      </label>
    </div>
    <!-- 4  hooks and localStorage-->
    <div>
      <h6>
        Приклад. Зберігаємо та продовжуємо редагувати дані. На сайті користувач
        вводить назву товару та кількість. Перед виході з сайту зберегти дані у
        localSrorage. А при заході на сайт – відновлювати дані з localSrorage
      </h6>
      <label>
        product
        <input type="text" v-model.trim="product.title" />
      </label>
      <label>
        price
        <input type="number" v-model.number="product.price" />
      </label>
      <button @click="setProductData">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLessonHooks",
  data() {
    return {
      // 1
      currentTime: null,
      // 2
      userAge: null,
      // 4
      product: { title: null, price: null },
    };
  },
  computed: {},
  methods: {
    showState(message) {
      alert(message);
    },
    // 1
    setCurrentTime() {
      this.currentTime = new Date().toLocaleTimeString();
    },
    // 2
    loadData() {
      alert("data load");
    },
    getProductData() {
      if (localStorage.getItem("product")) {
        const savedProduct = localStorage.getItem("product");
        this.product = JSON.parse(savedProduct);
      }
    },
    setProductData() {
      // alert(111);
      localStorage.setItem("product", JSON.stringify(this.product));
    },
  },
  // save after input some data
  // watch: {
  //   product: {
  //     handler(newVal, oldVal) {
  //       console.log(newVal, oldVal);
  //       this.setProductData();
  //     },
  //     deep: true,
  //   },
  // },
  beforeCreate() {
    // alert("beforeCreate"); // функціонал не доступний
    // при використанні наявних методів виникає помилка
  },
  created() {
    // this.showState("created"); //створено всі реактивні компоненти, методи та інше
    // 1
    setTimeout(() => {
      this.setCurrentTime();
    }, 100);

    // 2
    this.loadData();

    // 4 get data from LocalStorage
    this.getProductData();
  },
  beforeMount() {
    // this.showState("beforeMount");
  },
  mounted() {
    // this.showState("mounted"); //створено повністю всю розмітку дом дерева

    // 3
    this.$refs.ageInput.focus();

    // 4 set data from LocalStorage
  },
  beforeUpdate() {
    // this.showState("beforeUpdate");
  },
  update() {
    // this.showState("update");
    this.setProductData();
  },
  beforeUnmount() {
    // this.showState("beforeUnmount");
  },
  unmounted() {
    // this.showState("unmounted");
  },
};
</script>
