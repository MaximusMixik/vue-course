<template>
  <div>
    <fieldset>
      <legend>
        <h5>
          Задача 9. Перекладач. Користувачу виводять змішані картки з словами на
          англійській і українській мові. Користувач поступово клікає на картки
          (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що
          відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо
          червоною рамкою і через секунду забираємо рамку.
        </h5>
      </legend>
    </fieldset>

    <fieldset>
      <legend>
        <h5>Знайдіть пари слів</h5>
      </legend>

      <div class="row">
        <fieldset>
          <ul>
            <li
              v-for="word in uaList"
              :key="word.id"
              @click="setUaWord(word.id)"
              :class="[
                {
                  'blue-border': word.id === uaWordId,
                  'red-border': errorBorder && word.id === uaWordId,
                },
              ]">
              {{ word.ua }}
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <ul>
            <li
              v-for="word in enList"
              :key="word.id"
              @click="setEnWord(word.id)"
              :class="{
                'blue-border': word.id === enWordId,
                'red-border': errorBorder && word.id === enWordId,
              }">
              {{ word.en }}
            </li>
          </ul>
        </fieldset>
      </div>
    </fieldset>
  </div>
</template>

<script>
const words = [
  { id: 5, en: "table", ua: "стіл" },
  { id: 1, en: "car", ua: "автомобіль" },
  { id: 2, en: "bus", ua: "автобус" },
  { id: 3, en: "man", ua: "людина" },
  { id: 4, en: "boy", ua: "хлопець" },
];

export default {
  name: "TaskLesson9",
  data() {
    return {
      uaWordId: null,
      enWordId: null,
      uaList: this.randomList(),
      enList: this.randomList(),
      errorBorder: false,
    };
  },

  computed: {},

  methods: {
    randomList() {
      let arr = [];
      let wordsList = JSON.parse(JSON.stringify(words));
      do {
        const randWordPos = this.randomElement(wordsList);
        const randWord = wordsList.splice(randWordPos, 1);
        arr.push(...randWord);
      } while (wordsList.length > 0);

      return arr;
    },
    randomElement(arr) {
      let min = 0,
        max = arr.length - 1;
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    setUaWord(wordId) {
      this.uaWordId = wordId;
      if (parseInt(this.uaWordId && parseInt(this.enWordId))) this.checkWord();
      else this.errorBorder = false;
    },
    setEnWord(wordId) {
      this.enWordId = wordId;
      if (parseInt(this.uaWordId && parseInt(this.enWordId))) this.checkWord();
      else this.errorBorder = false;
    },
    checkWord() {
      this.errorBorder = false;
      if (this.enWordId === this.uaWordId) {
        this.uaList = this.uaList.filter((word) => word.id !== this.uaWordId);
        this.enList = this.enList.filter((word) => word.id !== this.enWordId);
      } else this.errorBorder = true;
    },
  },
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.blue-border {
  border: 1px solid blue;
}
.red-border {
  border: 1px solid red !important;
}
</style>
