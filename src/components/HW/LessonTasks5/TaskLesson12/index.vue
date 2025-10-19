<template>
	<div>
		<div class="container">
			<DepartmentList :departments-list="departmentList" @selected="selectedDepartment" />
			<ProductList :products-list="productsList" @remove="removeSelectedProduct" @selected="selectedProduct" />
		</div>
		<button :disabled="canAddToMainList" @click="addToMainList">Add
			to main list</button>
		<!-- {{ dividedProductsList }}

		<template v-if="selectedValues?.department">
			{{ selectedValues.department }}
		</template>
<template v-if="selectedValues?.productList?.length">
			{{ selectedValues.productList }}
		</template> -->

		<template v-if="dividedProductsList.length">
			<DividedList :divided-list="dividedProductsList" />
		</template>
	</div>
	<!-- Мережа магазинів. Дано список відділень та список товарів. Для кожного відділення можна вибирати декілька товарів. Вибирати та відображати перелік вибраних товарів для кожного відділення. -->
</template>

<script>
import { departmentList, productsList } from "../constants/12_shops";

import DepartmentList from "./components/DepartmentList/index.vue";
import ProductList from "./components/ProductList/index.vue";
import DividedList from "./components/DividedList/index.vue";

export default {
	name: "TaskLesson1",
	components: {
		DepartmentList,
		ProductList,
		DividedList,
	},
	data() {
		return {
			departmentList: [...departmentList],
			productsList: [...productsList],
			selectedValues: { department: null, productList: [] },
			dividedProductsList: [],
		};
	},
	computed: {
		canAddToMainList() {
			return !(this.selectedValues?.department && this.selectedValues?.productList?.length)
		}
	},
	methods: {
		selectedDepartment(departmentId) {
			this.selectedValues.department = this.departmentList.find(department => department.id == departmentId)
		},

		removeSelectedProduct(prodId) {
			this.selectedValues.productList = this.selectedValues.productList.filter(prod => prod !== prodId);
		},
		selectedProduct(selectedProductsId) {
			const selectedProduct = this.productsList.find(p => p.id === selectedProductsId)
			this.selectedValues.productList.push(selectedProduct)

		},
		clearSelectedValues() {
			this.selectedValues = { department: null, productList: [] }
		},
		deleteSelectedValues() {
			const departmentSelectedId = this.selectedValues.department.id
			this.departmentList = this.departmentList.filter(department => department.id !== departmentSelectedId)

			const productsSelectedIds = this.selectedValues.productList.map(p => p.id)

			// use includes
			this.productsList = this.productsList.filter(p => !productsSelectedIds.includes(p.id))
		},
		addToMainList() {
			this.dividedProductsList.push(JSON.parse(JSON.stringify(this.selectedValues)))

			this.deleteSelectedValues()
			this.clearSelectedValues()
		}
	},
};
</script>
<style scoped>
.container {
	display: flex;
	cursor: pointer;

	&>* {
		flex: 1 1 auto;
	}
}
</style>
