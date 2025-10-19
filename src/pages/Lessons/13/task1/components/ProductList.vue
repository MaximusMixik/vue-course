<template>
	<div class="list">
		<ProductItem v-for="product in products" :key="product.id" :product="product" />
	</div>
</template>

<script>

import ProductItem from './ProductItem.vue'
export default {
	name: 'ProductList',
	props: {
		products: {
			type: Array,
			default: () => []
		},
	},
	components: {
		ProductItem,
	},
}
</script>

<style scoped>
.list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	padding-block: 40px;
}
</style>