<template>
	<div>
		<h5>TaskLesson1</h5>
		<div>
			Задача 1. Відтворити селектор товарів за зразком (дані підготуйте самостійно)</div>
		<CategoriesSelector />

		<ProductsList v-if="currentCategory" :category="currentCategory" />
		<!--  -->
		<!-- <h1> {{ currentCategory?.name }}</h1> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import CategoriesSelector from './components/CategoriesSelector/index.vue';
import ProductsList from './components/ProductsList/index.vue';
export default {
	name: "TaskLesson1",
	components: {
		CategoriesSelector,
		ProductsList,
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters(['currentCategory']),
	},
	methods: {},
};
</script>
