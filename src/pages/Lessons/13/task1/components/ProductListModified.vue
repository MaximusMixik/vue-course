<template>
	<div class="list">
		<ProductItem v-for="product in products" :key="product.id" :product="product">
			<template #price>
				<div> {{ product.description }}</div>
				<div>{{ product.specs.capacity }}, {{ product.specs.voltage }}, {{ product.specs.startingCurrent }}</div>
			</template>
		</ProductItem>
	</div>
</template>

<script>

import ProductItem from './ProductItem.vue'
export default {
	name: 'ProductListModified',
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