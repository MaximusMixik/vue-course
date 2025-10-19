<template>
  <div>
    <div>
      <h5>
        Задача 2. Створити імітатор мессенджера. Є можлиість
        додавати/відображати повідомлення і ставити лайки .
      </h5>

      <fieldset>
        <legend><h6>messenger</h6></legend>

        <div>
          <div>
            <label>
              new message
              <input
                type="text"
                v-model.trim="message"
                placeholder="Type a new message" />
            </label>
            <button @click="sendMessage">Send message</button>
          </div>

          <div v-show="messages.length > 0">
            <div v-for="message in messages" :key="message.id">
              <hr />
              {{ message.text }}
              <MessangerAction
                v-for="action in message.actions"
                :item-data="action"
                :key="action.id"
                @like="onLike(message.id, action.id)"
                @dislike="onDislike(message.id, action.id)" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import MessangerAction from "./components/MessangerAction.vue";

export default {
  name: "TaskLesson3",
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  components: {
    MessangerAction,
  },

  watch: {
    messages: {
      handler() {
        // newVal, oldVal
        localStorage.setItem("messages", JSON.stringify(this.messages));
      },
      deep: true,
    },
  },
  created() {
    this.messages = JSON.parse(localStorage.getItem("messages"));
  },
  methods: {
    clearActions() {
      this.message = "";
    },
    onLike(messageId, actionId) {
      const messageIndex = this.messages.findIndex(
        (message) => message.id === messageId
      );
      const actionIndex = this.messages[messageIndex].actions.findIndex(
        (action) => action.id === actionId
      );
      this.messages[messageIndex].actions[actionIndex].likes++;
    },
    onDislike(messageId, actionId) {
      const messageIndex = this.messages.findIndex(
        (message) => message.id === messageId
      );
      const actionIndex = this.messages[messageIndex].actions.findIndex(
        (action) => action.id === actionId
      );
      this.messages[messageIndex].actions[actionIndex].likes--;
    },
    sendMessage() {
      if (!this.message || this.message.length < 3) return;
      const time = new Date();
      const message = {
        id: time.getTime(),
        text: this.message,
        actions: [
          {
            id: 1,
            title: "Hello",
            likes: 0,
          },
          {
            id: 2,
            title: "Hi",
            likes: 0,
          },
          {
            id: 3,
            title: "Bue",
            likes: 0,
          },
          {
            id: 4,
            title: "Ok",
            likes: 0,
          },
        ],
      };

      this.messages.push(message);
      this.clearActions();
    },
  },
};
</script>
