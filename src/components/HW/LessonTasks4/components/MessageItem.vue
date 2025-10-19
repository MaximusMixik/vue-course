<template>
	<div>
		<span> {{ message.text }}</span>
		<!-- or simple example @click="$emit('like', messageId: message.id)" -->
		<button @click="$emit('like', { messageId: message.id, n: 1 })">like</button>
		<button @click="$emit('dislike', { messageId: message.id, n: -1 })">dislike</button>
		<strong>likes: {{ message.reactions }}</strong>
	</div>
</template>
<script>
export default {
	name: 'MessageItem',
	props: {
		message: {
			type: Object,
			required: true,
		},
	},
	emits: ['like', 'dislike']
}
</script>
