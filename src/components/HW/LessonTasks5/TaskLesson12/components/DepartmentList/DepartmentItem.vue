<template>
	<label :for="`depart-${department.id}`" class="item">
		<input @change="onChange" type="radio" name="department" :id="`depart-${department.id}`" />
		<span> {{ department.name }}</span>
	</label>
	<!-- hidden -->
</template>

<script>
export default {
	name: "DepartmentItem",
	props: {
		department: {
			type: Object,
			default: () => ({}),
		},
	},
	emits: ["selected"],
	methods: {
		onChange() {
			this.$emit("selected", this.department.id);
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
