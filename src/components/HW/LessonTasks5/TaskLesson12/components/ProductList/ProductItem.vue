<template>
	<label :for="`product-${product.id}`" class="item">
		<input @change="onChange" type="checkbox" name="product" :id="`product-${product.id}`" />
		<span> {{ product.name }}</span>
	</label>
</template>

<script>
export default {
	name: "ProductItem",
	props: {
		product: {
			type: Object,
			default: () => ({}),
		},
	},

	emits: ["selected", 'remove'],
	methods: {
		onChange(event) {
			// console.log(event.target.checked)

			if (event.target.checked) {
				this.$emit("selected", this.product.id);
			}
			else {
				this.$emit("remove", this.product.id);

			}
		},
	},
};
</script>
<style scoped>
.item {
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>
