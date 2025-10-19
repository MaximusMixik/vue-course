<template>
	<fieldset>
		<legend>
			<h4>
				FiltersComp
			</h4>
		</legend>
		<div>
			<!--TODO add  vehicleType -->
			<!-- <SelectFilter /> -->

			<!-- Body Type -->
			<CheckboxFilter label="Body Type" :list="getBodiesList" v-model="filters.body" />

			<!-- Brand -->
			<!-- Todo add functional with clear brand after select new  -->
			<SelectFilter label="Mark" :list="getBrandsList" v-model="filters.brand" />

			<!--TODO add  Model functional after select brand-->
			<SelectFilter label="Model" :list="getModelList" v-model="filters.model" />


			<!--TODO add  years -->
			<!-- {{ getFilters.year }} -->
			<!-- <RangeFilter />  -->

			<button @click="clearFilters">Clear All Filters</button>
		</div>
	</fieldset>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import SelectFilter from './SelectFilter.vue';
import CheckboxFilter from './CheckboxFilter.vue';
// import RangeFilter from './RangeFilter.vue';
export default {
	name: 'FiltersComp',
	components: {
		SelectFilter,
		// RangeFilter,
		CheckboxFilter,
	},
	computed: {
		...mapGetters(['getBrandsList', 'getFilters', 'getBodiesList', 'getModelList']),
		filters: {
			get() {
				return this.getFilters
			},
			set(newVal) {
				alert('update')
				console.log(newVal)
				this.setFilters(newVal)
			}
		},

		// filterValue: {
		// 	get() {
		// 		return this.filter
		// 	},
		// 	set(val) {
		// 		this.setFilter(val)
		// 	},
		// },
	},
	methods: {
		...mapActions(['setFilters', 'clearFilters'])
	},
}
</script>

<style lang="scss" scoped></style>