<template>
	<div class="container">
		<WorkerTasks v-for="(worker, ind) in assignedTasks" :key="ind" :worker="worker" @delete="$emit('delete', $event)" />
	</div>
</template>

<script>
import WorkerTasks from './WorkerTasks.vue'

export default {
	name: "DividedTasks",
	props: {
		assignedTasks: {
			type: Array,
			default: () => []
		},
	},
	components: {
		WorkerTasks,
	},
}
</script>
<style>
.container {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
}
</style>