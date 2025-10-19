<template>
  <div>
    <h2>
      Задача 2. Створити імітатор мессенджера. Є можлиість додавати/відображати
      повідомлення і ставити лайки .
    </h2>

    <QuantityItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      @addLike="like"
      @removeLike="dislike" />

    <MessengerItem />
  </div>
</template>

<script>
import QuantityItem from "./components/QuantityItem.vue";
import MessengerItem from "./components/MessengerItem.vue";

export default {
  name: "TaskLesson2",
  components: {
    QuantityItem,
    MessengerItem,
  },
  data() {
    return {
      list: [
        { name: "Hello", likes: 2, id: 1 },
        { name: "Hi", likes: 4, id: 2 },
        { name: "Bye", likes: 2, id: 3 },
        { name: "Ok", likes: 1, id: 4 },
      ],
    };
  },
  methods: {
    like(itemId) {
      const searchIndex = this.list.findIndex((item) => item.id === itemId);
      this.list[searchIndex].likes++;
    },
    dislike(itemId) {
      const searchIndex = this.list.findIndex((item) => item.id === itemId);
      // if (this.list[searchIndex].likes === 0) return;

      this.list[searchIndex].likes--;
    },
  },
};
</script>
