<template>
	<main-layout>
		<h1>Lesson13</h1>
		<ProductListModifier title="Battery Modifier" :list="batteriesList">
			<template #default="{ list }">
				<h3>New Title with product count - {{ list.length }}</h3>
			</template>
		</ProductListModifier>
		<hr>


		<ProductList title="Laptops default" :list="laptopsList">
			<template #default="{ totalPrice }">
				<h2>New Title with total price <strong>{{ totalPrice }}uan</strong></h2>
			</template>
		</ProductList>
	</main-layout>
</template>

<script>

import ProductList from './components/ProductList.vue'
import ProductListModifier from './components/ProductListModifier.vue'

import { laptops, carBatteries } from './constants/data.js'

export default {
	name: 'LessonComp13',
	components: {
		ProductList,
		ProductListModifier
	},
	data() {
		return {
		}
	},
	computed: {
		laptopsList() {
			return laptops
		},
		batteriesList() {
			return carBatteries
		}
	},
}
</script>

<style lang="scss" scoped></style>