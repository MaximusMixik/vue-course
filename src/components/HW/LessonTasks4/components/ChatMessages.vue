<template>
	<fieldset>
		<legend>
			<h6>All messages</h6>
		</legend>
		<MessageItem v-for="message in messages" :key="message.id" :message="message" @dislike="$emit('dislike', $event)"
			@like="$emit('like', $event)" />
	</fieldset>
</template>

<script>
import MessageItem from './MessageItem.vue';
export default {
	name: 'ChatMessages',
	props: {
		messages: {
			type: Array,
			required: true
		},
	},
	emits: ['like', 'dislike'],
	components: {
		MessageItem,
	},

}
</script>
