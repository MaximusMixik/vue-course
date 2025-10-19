<template>
	<fieldset>
		<legend>
			<h3>{{ category.name }} in Ukraine !</h3>
		</legend>
		<div class="container">
			<ProductItem v-for="product in getProductsByCategory" :key="product.id" :product="product" />
		</div>
	</fieldset>
</template>

<script>

import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue'
export default {
	name: 'ProductsList',

	props: {
		category: {
			type: Object,
			required: true
		},
	},
	components: {
		ProductItem
	},
	computed: {
		...mapGetters(['getProductsByCategory']),

	},
}
</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
}
</style>