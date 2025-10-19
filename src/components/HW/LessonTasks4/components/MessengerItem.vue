<template>
  <div>
    <input type="text" v-model="userMessage" placeholder="Type a new message" />
    <button @click="addMessage">send</button>
    <div v-show="messages.length !== 0">
      <div v-for="(message, ind) in messages" :key="ind">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerItem",
  data() {
    return {
      userMessage: "",
      messages: [],
    };
  },
  methods: {
    addMessage() {
      if (this.userMessage.length) {
        this.messages.push(this.userMessage);
        this.userMessage = "";
      }
    },
  },
};
</script>
