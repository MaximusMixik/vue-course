<template>
	<AppLayout>
		<ProductList :products="laptops" />
	</AppLayout>
</template>

<script>
import ProductList from './components/ProductList.vue'
import { laptops } from '../../13/lesson/constants/data.js'

export default {
	name: 'ProductsView',
	components: {
		ProductList,
	},
	computed: {
		laptops() {
			return laptops
		}
	},
}
</script>

<style lang="scss" scoped></style>