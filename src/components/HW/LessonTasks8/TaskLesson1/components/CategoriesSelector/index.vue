<template>
	<div class="container">
		<CategoryItem v-for="category in categoriesList" :key="category.id" :category="category"
			@click="selectCategory(category.id)" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CategoryItem from './CategoryItem.vue';
export default {
	name: 'CategoriesSelector',
	components: {
		CategoryItem,
	},
	computed: {
		...mapGetters(['categoriesList']),

	},
	created() {
		this.loadCategories()
	},
	methods: {
		...mapActions(['loadCategories', 'selectCategory']),
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