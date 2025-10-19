<template>
  <div>
    <h6>
      Задача 4. Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано
      інформацію про наявність міни (використати атрибути). Спочатку клітинки
      сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір
      стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх
      сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
    </h6>
    <div>
      <div
        class="cell"
        :class="[cellClass(ind)]"
        @click="onCellClick(ind)"
        v-for="(cell, ind) in gameField"
        :key="ind"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskLesson4",
  data() {
    return {
      gameField: [
        {
          hasMine: 1,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 1,
          isClosed: true,
        },
        {
          hasMine: 1,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
        {
          hasMine: 0,
          isClosed: true,
        },
      ],
    };
  },
  computed: {},
  methods: {
    cellClass(ind) {
      let currentClass;
      let cell = this.gameField[ind];
      if (cell.isClosed) currentClass = "closed";
      else {
        if (cell.hasMine) currentClass = "mine";
        else currentClass = "free";
      }
      return currentClass;
    },
    onCellClick(ind) {
      let cell = this.gameField[ind];

      if (!cell.isClosed) return; //if open return

      if (cell.hasMine) {
        cell.isClosed = false; //if has mine
      } else {
        // open all siblings elements
        // right
        for (let i = ind; i < this.gameField.length; i++) {
          if (this.gameField[i].hasMine) break;
          else this.gameField[i].isClosed = false;
        }
        // left
        for (let i = ind - 1; i >= 0; i--) {
          if (this.gameField[i].hasMine) break;
          else this.gameField[i].isClosed = false;
        }
      }
    },
  },
};
</script>
<style scoped>
.cell {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
}
.closed {
  background-color: grey;
}
.mine {
  background-color: red;
}
.free {
  background-color: green;
}
</style>
