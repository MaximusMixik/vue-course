<template>
	<div>
		<slot :total-price="totalPrice">
			<h3>{{ title }}</h3>
		</slot>
		<div class="container">
			<!-- <product-item v-for="item in list" :item="item" :key="item.id" /> -->
			<slot name="list" :list="list">
				<product-item v-for="item in list" :item="item" :key="item.id" />
			</slot>
		</div>

	</div>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
	name: 'ProductList',
	components: {
		ProductItem,
	},
	props: {
		title: {
			type: String,
			default: 'TITLE',
		},
		list: {
			type: Array,
			default: () => []
		},
	},
	computed: {
		totalPrice() {
			return this.list.reduce((prevSum, p) => p.price + prevSum, 0)
		}
	},
}
</script>

<style scoped>
.container {
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, 1fr);
}
</style>