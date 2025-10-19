<template>
	<div class="item">
		<img :src="category.image" :alt="category.name">
		<strong>{{ category.name }}</strong>
		<p>{{ category.description }}</p>
	</div>
</template>

<script>
export default {
	name: 'CategoryItem',
	props: {
		category: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.item {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 4px;
}

.item {
	img {
		aspect-ratio: 1 / 1;
		display: block;
		background-color: gray;
		object-fit: cover;
		max-width: 100%;
	}
}
</style>