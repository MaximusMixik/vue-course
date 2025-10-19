<template>
	<div>
		<ul>
			<li>{{ car.vehicleType }}</li>
			<li>{{ car.bodyType }}</li>
			<li>{{ car.brand }}</li>
			<li>{{ car.model }}</li>
			<li>{{ car.year }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CarItem',
	props: {
		car: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style lang="scss" scoped></style>