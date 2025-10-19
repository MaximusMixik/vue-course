<template>
  <div>
    Задача 5. Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у
    обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка
    «Додати» заблокована. Якщо не вистачає хлопців або дівчат вибір також
    блокується.

    <div class="body">
      <fieldset>
        <legend>Boys ({{ boys.length }})</legend>
        <ul>
          <li v-for="boy in boys" :key="boy.id">
            <span>
              {{ boy.name }}
            </span>
            <button
              @click="onChoiceBoy(boy.id)"
              :disabled="choiceBoy !== null || boys.length === 0">
              ADD boy
            </button>
          </li>
        </ul>
        <p v-if="boys.length === 0" class="empty-message">
          Немає доступних хлопців
        </p>
      </fieldset>
      <fieldset>
        <legend>Girls ({{ girls.length }})</legend>
        <ul>
          <li v-for="girl in girls" :key="girl.id">
            <span>
              {{ girl.name }}
            </span>
            <button
              @click="onChoiceGirl(girl.id)"
              :disabled="choiceGirl !== null || girls.length === 0">
              ADD Girl
            </button>
          </li>
        </ul>
        <p v-if="girls.length === 0" class="empty-message">
          Немає доступних дівчат
        </p>
      </fieldset>
    </div>

    <div v-if="choiceGirl || choiceBoy">
      <h4>Поточний вибір:</h4>
      <p>
        <span v-if="choiceBoy">{{ choiceBoy.name }}</span>
        <span v-if="choiceBoy && choiceGirl"> та </span>
        <span v-if="choiceGirl">{{ choiceGirl.name }}</span>
      </p>
    </div>

    <button :disabled="personsChoice" @click="addPare">
      add this persons to pare
    </button>
    <button :disabled="!choiceBoy && !choiceGirl" @click="resetPare">
      reset this pare
    </button>

    <fieldset v-show="pareList.length > 0">
      <legend>Pare list ({{ pareList.length }})</legend>
      <ul>
        <li v-for="pare in pareList" :key="pare.id">
          <span> {{ pare.boy.name }} and {{ pare.girl.name }} </span>
          <button @click="deletePare(pare.id)">reset this pare</button>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskLesson6",
  data() {
    return {
      boys: [
        { id: 1, name: "Vasyl" },
        { id: 2, name: "Vitalii" },
        { id: 3, name: "Andrii" },
        { id: 4, name: "Igor" },
      ],
      girls: [
        { id: 5, name: "Inna" },
        { id: 6, name: "Anna" },
        { id: 7, name: "Oksana" },
        { id: 8, name: "Vladislava" },
      ],
      choiceBoy: null,
      choiceGirl: null,
      pareList: [],
    };
  },
  computed: {
    personsChoice() {
      return !this.choiceBoy || !this.choiceGirl;
    },
  },
  methods: {
    deletePare(id) {
      console.log(id);

      const searchId = this.pareList.findIndex((pare) => pare.id === id);
      if (searchId === -1) return;
      const currentPare = this.pareList.splice(searchId, 1)[0];

      this.boys.push(currentPare.boy);
      this.girls.push(currentPare.girl);
    },
    onChoiceBoy(id) {
      const searchInd = this.boys.findIndex((boy) => boy.id === id);
      if (searchInd === -1) return;

      this.choiceBoy = this.boys.splice(searchInd, 1)[0];
    },
    onChoiceGirl(id) {
      const searchInd = this.girls.findIndex((girl) => girl.id === id);
      if (searchInd === -1) return;

      this.choiceGirl = this.girls.splice(searchInd, 1)[0];
    },
    addPare() {
      const time = new Date();
      const pare = {
        id: time.getTime(),
        boy: this.choiceBoy,
        girl: this.choiceGirl,
      };

      this.pareList.push(pare);
      this.clearPare();
    },
    resetPare() {
      if (this.choiceBoy) {
        this.boys.push(this.choiceBoy);
      }
      if (this.choiceGirl) {
        this.girls.push(this.choiceGirl);
      }
      this.clearPare();
    },
    clearPare() {
      this.choiceBoy = null;
      this.choiceGirl = null;
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  gap: 100px;
}
</style>
