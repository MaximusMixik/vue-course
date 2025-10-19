<template>
  <div>
    Задача 1. Вводиться кількість пасажирів. Вивести: скільки потрібно автобусів
    (кожен автобус на 20 місць) скільки пляшок води (кожному пасажиру 2 пляшки)
    скільки бутербродів (кожному пасажиру 3 бутерброди)

    <div>
      <fieldset>
        <label>
          Вводиться кількість пасажирів
          <input type="number" v-model="passengerNumber" />
        </label>

        <div>
          <hr />
          <div>
            потрібно автобусів (кожен автобус на 20 місць)
            <strong>
              {{ bussesNumber }}
            </strong>
          </div>
          <div>
            пляшок води (кожному пасажиру 2 пляшки)
            <strong>
              {{ bottleNumber }}
            </strong>
          </div>
          <div>
            бутербродів (кожному пасажиру 3 бутерброди)
            <strong>
              {{ butterNumber }}
            </strong>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLesson1",
  data() {
    return {
      passengerNumber: null,
    };
  },
  computed: {
    bussesNumber() {
      return Math.ceil(this.passengerNumber / 20);
    },
    bottleNumber() {
      return this.passengerNumber * 2;
    },
    butterNumber() {
      return this.passengerNumber * 3;
    },
  },
  methods: {},
};
</script>
