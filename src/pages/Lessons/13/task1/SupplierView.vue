<template>
	<AppLayout>
		<ProductListModified :products="carBatteries" />
		<template #footer-left>
			<div>
				<h3>
					Most popular: <strong>Economy</strong>
				</h3>
			</div>
		</template>
	</AppLayout>
</template>

<script>
// import ProductList from './components/ProductList.vue'
import ProductListModified from './components/ProductListModified.vue'

import { carBatteries } from '../../13/lesson/constants/data.js'

export default {
	name: 'SupplierView',
	components: {
		ProductListModified,
	},
	computed: {
		carBatteries() {
			return carBatteries
		}
	},
}
</script>

<style lang="scss" scoped></style>