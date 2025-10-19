<template>

	<fieldset>
		<legend>
			<h5>
				Divided Products
			</h5>
		</legend>
		<ul>
			<li v-for="item in dividedList" :key="item.department.id">
				<h6>{{ item.department.name }}</h6>
				<ol>
					<li v-for="product in item.productList" :key="product.id">
						{{ product.name }}</li>
				</ol>
			</li>
		</ul>


	</fieldset>


</template>

<script>
export default {
	name: 'DividedList',
	props: {
		dividedList: {
			type: Array,
			default: () => []
		},
	},
}
</script>

<style lang="scss" scoped></style>