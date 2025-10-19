<template>
  <div>
    <h5>
      Задача 4. “Рахунок у банку” Вимоги: 1) Спочатку сума дорівнює 0грн.
      Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям. 2)
      Сума автоматично переводиться у долари та євро (фіксований курс задається
      у data). 3) можливість зарахувати суму (контролювати, щоб не була
      від’ємною) 4) можливість зняти (щоб не можна зняти більше ніж є на
      рахунку) 5) при виконанні зняття і зарахування коштів вираховувати 3% від
      суми (відображати кількість відсотків автоматично) При зміні суми : - якщо
      було зняття, то суму відоражати червоним - якщо було зарахування, то суму
      відображати зеленим Якщо сума валюти менша за 100 то відображати червоним
      кольором, інакше - зеленим
    </h5>

    <fieldset>
      <div :class="statusColorClass">
        сума дорівнює
        <strong> {{ sum.toFixed(2) }} uan </strong>
      </div>

      <div>
        <div>
          <label>
            input value
            <input type="number" v-model="money" />
          </label>

          <div>
            <span>
              <button @click="addMoney">Add money</button>
              зарахуванням на рахунок
            </span>
          </div>
          <div>
            <span>
              <button :disabled="!sum" @click="withdrawMoney">
                withdraw money
              </button>
              зняття з рахунку
            </span>
          </div>
        </div>
      </div>

      <div v-show="money">
        при виконанні зняття і зарахування коштів вираховувати =
        {{ percentInMoney }}uan (3% від суми)
      </div>

      <div v-show="sum">
        <span :class="euroSumClass">
          in euro =
          {{ euroSum }}
        </span>
        -
        <span :class="dollarSumClass">
          in dollar =
          {{ dollarSum }}
        </span>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskLesson4",
  data() {
    return {
      sum: 0,
      money: null,
      dollarCourse: 41,
      euroCourse: 44,
      percent: 0.03,
      status: "",
    };
  },
  computed: {
    dollarSum() {
      return (this.sum / this.dollarCourse).toFixed(2);
    },
    euroSum() {
      return (this.sum / this.euroCourse).toFixed(2);
    },
    euroSumClass() {
      if (this.euroSum < 100) return "red";
      else return "green";
    },
    dollarSumClass() {
      if (this.dollarSum < 100) return "red";
      else return "green";
    },
    // percentInMoney: {
    //   get() {
    //     return this.money * this.percent;
    //   },
    //   set() {
    //     // newVal
    //     return (this.money * this.percent).toFixed(2);
    //   },
    // },
    percentInMoney() {
      if (!this.money) return;
      // return this.money * this.percent;
      return (this.money * this.percent).toFixed(2);
    },
    statusColorClass() {
      if (!this.status) return "";
      if (this.status === "add") return "green";
      else return "red";
    },
  },
  methods: {
    withdrawMoney() {
      if (!this.money) {
        this.showMessage("введіть сумму");
        return;
      }

      const withdrawSum =
        Math.abs(this.money) + parseFloat(this.percentInMoney);

      if (this.sum - withdrawSum < 0) {
        this.showMessage("недостатньо коштів, спробуйте іншу сумму");
        this.clearInput();
        return;
      }
      this.status = "withdraw";
      this.sum -= withdrawSum;
      this.clearInput();
    },
    addMoney() {
      if (!this.money) {
        this.showMessage("введіть сумму");
        return;
      }
      this.status = "add";
      this.sum += Math.abs(this.money) - parseFloat(this.percentInMoney);
      this.clearInput();
    },
    clearInput() {
      this.money = null;
    },
    showMessage(message) {
      alert(message);
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
