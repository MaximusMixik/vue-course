<template>
  <div>
    <!-- 1 v-if -->
    <div>
      <h6>
        Задача 1. Приклад. Користувача заходить на сайт і вводить свій вік. Якщо
        вік менше 16, то вивсти повідомлення про заборону користування сайтом
      </h6>

      <label>
        <input type="number" v-model.number="userAge" />
      </label>
      <div v-if="isValidData">
        <div v-if="!isUserHasValidAge">
          повідомлення про заборону користування сайтом
        </div>
        <button v-else>register now</button>
      </div>
      <div v-else>input valid data</div>
    </div>

    <!-- 3  v-if v-else-if  v-else -->
    <div>
      <h6>
        Приклад. З клавіатури вводиться кількість грошей користувача та ціна
        товару • якщо грошей не вистачає, то повідомити скільки ще треба
        доплатити • якщо грошей достатньо на купівлю ще й акційного подарунку
        (100 грн), то запропонувати купити (відобразити додаткову кнопку «Купити
        подарунок») • якщо кількість грошей співпадає з вартістю, то вивести
        смайл
      </h6>

      <div>
        <label>
          user money
          <input type="number" v-model.number.lazy="money" />
        </label>
        <label>
          product price
          <input type="number" v-model.number.lazy="price" />
        </label>

        <div v-if="money && price">
          <div v-if="money < price">
            ще треба доплатити {{ Math.abs(price - money) }}
          </div>
          <div v-else-if="money >= price + 100">
            грошей достатньо на купівлю ще й акційного подарунку (100 грн)
            <br />
            решта {{ money - price }}
            <br />
            <button>Bue gift -100</button>
          </div>
          <div v-else-if="price === money">
            грошей рівно вистачає на купівлю товару
          </div>
          <div v-else>решта {{ money - price }}</div>
        </div>
      </div>
    </div>

    <!-- 4 v-if template-->
    <div>
      <h6>
        Приклад. Користувач вводить логін. Якщо логін «admin» - відобразити поле
        для вводу пароля і кнопку «Увійти», інакше – вивести првітання «Раді
        бачити шановний Гість!»
      </h6>

      <fieldset>
        <label>
          user login
          <input type="text" v-model.trim="login" />
        </label>

        <template v-if="login">
          <template v-if="login === 'admin'">
            <label>
              password
              <input type="password" v-model.trim="password" />
            </label>
            <br />
            <button>«Увійти»</button>
          </template>
          <template v-else> Раді бачити шановний Гість! </template>
        </template>
      </fieldset>
    </div>

    <!-- 5 v-show-->
    <div>
      <h6>
        Приклад. Вводиться інтервал. Після запуску відобразити таймер відліку
        (через секунду відображати і забирати червоний круг
      </h6>
      <fieldset>
        <label>
          Вводиться інтервал
          <input type="number" v-model.number.lazy="interval" />
        </label>
        <button @click="start">Start</button>
        <div
          v-show="status"
          style="
            border-radius: 50%;
            width: 80px;
            background: red;
            height: 80px;
          "></div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLessonVIF",

  data() {
    return {
      // 1
      userAge: null,

      // 2
      money: null,
      price: null,

      // 4
      login: null,
      password: null,

      // 5
      interval: null,
      status: false,
    };
  },
  computed: {
    // 1
    isValidData() {
      return this.userAge && this.userAge > 0 && this.userAge < 120;
    },
    isUserHasValidAge() {
      return this.userAge > 16;
    },
  },
  methods: {
    // 5
    start() {
      setTimeout(() => {
        this.status = this.status ? false : true;
        this.start();
      }, this.interval);
    },
  },
};
</script>
