<template>
	<fieldset>
		<legend>
			<h6>Departments</h6>
		</legend>

		<div>
			<DepartmentItem v-for="department in departmentsList" :key="department.id" :department="department"
				@selected="$emit('selected', $event)" />
		</div>
	</fieldset>
</template>

<script>
import DepartmentItem from "./DepartmentItem.vue";

export default {
	name: "DepartmentList",
	components: {
		DepartmentItem,
	},
	emits: ["selected"],

	props: {
		departmentsList: {
			type: Array,
			default: () => [],
		},
	},
	methods: {},
};
</script>
