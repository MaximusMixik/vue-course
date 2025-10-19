<template>
	<div>
		<h2>
			Задача 2. Створити імітатор мессенджера. Є можлиість додавати/відображати
			повідомлення і ставити лайки .
		</h2>

		<fieldset>
			<legend>
				<h5>Chat v1</h5>
			</legend>

			<div>
				<label>
					Your message
					<input type="text" name="text" v-model.trim="messageText" placeholder="input your message">
				</label>

				<button @click="sendMessage">
					Send Message
				</button>
			</div>

			<ChatMessages v-if="messages.length" :messages="messages" @dislike="messageReactions" @like="messageReactions" />

		</fieldset>
	</div>
</template>

<script>
import ChatMessages from './components/ChatMessages.vue'
export default {
	name: "TaskLesson2",
	components: {
		ChatMessages
	},
	data() {
		return {
			messageText: null,
			messages: [
				{ text: 'hello', reactions: 1, id: 32 },
				{ text: 'Bye', reactions: 10, id: 33 },
			]
		};
	},
	methods: {
		sendMessage() {
			this.messages.push({
				text: this.messageText,
				id: new Date().getTime(),
				reactions: 0,
			})
			this.messageText = null
		},
		messageReactions({ messageId, n }) {
			const currentMessage = this.messages.find(m => m.id === messageId)
			if (!currentMessage) return

			currentMessage.reactions = (currentMessage.reactions ?? 0) + n;
			// currentMessage.reactions += n;

			// not good
			// this.messages.forEach(m => {
			// 	if (m.id === messageId) {
			// 		m.reactions += n
			// 	}
			// })
		}
		// simple
		// dislike(messageId) {
		// 	this.messages.forEach(m => {
		// 		if (m.id === messageId) {
		// 			m.reactions -= 1
		// 		}
		// 	})
		// },
		// like(messageId) {
		// 	this.messages.forEach(m => {
		// 		if (m.id === messageId) {
		// 			m.reactions += 1
		// 		}
		// 	})
		// }
	},

};
</script>
