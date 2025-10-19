<template>
	<div>
		<h4>Enabled Models = {{ getEnabledModels }}</h4>
		<!-- {{ getFilteredCars }} -->
		<CarItem v-for="car in getFilteredCars" :car="car" :key="car.id" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import CarItem from './CarItem.vue';
export default {
	name: 'CarsList',
	components: {
		CarItem,
	},
	computed: {
		...mapGetters(['allCarsList', 'getFilteredCars', 'getEnabledModels']),
	},
	methods: {
		...mapActions(['loadCars']),

	},
	created() {
		this.loadCars()
	}
}
</script>

<style lang="scss" scoped></style>