<template>
	<fieldset>
		<legend>
			<h6>Products</h6>
		</legend>

		<div>
			<div>
				<ProductItem v-for="product in productsList" :key="product.id" :product="product" @remove="remove"
					@selected="selected" />
			</div>
		</div>
	</fieldset>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
	name: "ProductList",
	components: {
		ProductItem,
	},

	// data() {
	// 	return {
	// 		valuesArray: [],
	// 	};
	// },
	emits: ["selected", 'remove'],

	props: {
		productsList: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		selected(itemId) {
			// this.valuesArray.push(itemId);
			// this.$emit("selected", this.valuesArray);
			this.$emit("selected", itemId);
		},
		remove(itemId) {
			// this.valuesArray = this.valuesArray.filter(item => item !== itemId);
			// this.$emit("selected", this.valuesArray);
			this.$emit("remove", itemId);
		},
	},
};
</script>
