<template>
  <div>
    <h5>
      Задача 2. Вводиться номер місяця. Автоматично виводити рекомендований одяг
      (зима – пальто, літо – шорти ….). Також автоматично виводити зображення з
      відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс,
      …).
    </h5>

    <fieldset>
      <label>
        Вводиться номер місяця
        <input type="number" v-model.number.lazy="monthNumber" />
      </label>

      <div v-if="seasonClothes">
        <div>рекомендований одяг - {{ seasonClothes.clothes }}</div>
        <img
          :src="seasonClothes.image"
          style="width: 400px; height: 400; display: block; object-fit: cover"
          alt="Image" />
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskLesson2",
  data() {
    return {
      monthNumber: null,
    };
  },
  computed: {
    seasonClothes() {
      if (!this.monthNumber) return null;

      let res = {
        clothes: "",
        image: "",
      };

      switch (this.monthNumber) {
        case 12:
        case 1:
        case 2:
          res.clothes = "пальто";
          res.image =
            "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";
          break;
        case 3:
        case 4:
        case 5:
          res.clothes = "шорти";
          res.image =
            "https://plus.unsplash.com/premium_photo-1673799490772-2ea0b711e43b?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          break;
        case 6:
        case 7:
        case 8:
          res.clothes = "шорти";
          res.image =
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fHww";
          break;
        case 9:
        case 10:
        case 11:
          res.clothes = "пальто";
          res.image =
            "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFsbHxlbnwwfHwwfHx8MA%3D%3D";
          break;
      }

      return res;
    },
  },
  methods: {},
};
</script>
