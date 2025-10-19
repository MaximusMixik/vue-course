<template>
	<div>
		<img :src="product.image" alt="Product Image">
		<div>
			<h6>{{ product.name }}</h6>
			<strong :class="{ 'red': product.oldPrice }">
				{{ product.price }} uan
			</strong>
			<div v-if="product.oldPrice" style="text-decoration: line-through;">
				{{ product.oldPrice }} uan
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
img {
	aspect-ratio: 1 / 1;
	display: block;
	background-color: gray;
	object-fit: cover;
	max-width: 100%;
}

.red {
	color: red;
}
</style>