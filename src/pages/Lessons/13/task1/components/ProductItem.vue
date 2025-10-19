<template>
	<div class="card">
		<img :src="product.image" alt="Image">

		<h2>
			{{ product.name }}
		</h2>
		<div>
			<slot name="price">
				{{ product.price }}uan
			</slot>
		</div>
		<button>Bue product</button>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style scoped>
.card {
	padding: 12px;
	border: 1px solid green;
	border-radius: 16px;
}

img {
	max-width: 100%;
}
</style>