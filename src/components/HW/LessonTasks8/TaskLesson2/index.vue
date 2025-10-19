<template>
	<div>
		<h5>Задача 2. Відтворити селектор за зразком (дані підготуйте самостійно)</h5>

		<div>
			<div class="container">
				<FiltersComp />
				<CarsList />
			</div>
		</div>
	</div>
</template>

<script>
import FiltersComp from './components/FiltersComp/index.vue'
import CarsList from './components/CarsList/index.vue'

export default {
	name: "TaskLesson2",
	// data() {
	// 	return {};
	// },
	components: {
		FiltersComp,
		CarsList
	},
	// computed: {},
	// methods: {},
};
</script>

<style scoped>
.container {
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(3, 1fr);
}
</style>
