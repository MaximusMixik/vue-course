<template>
	<div class="card">
		<div>{{ task.title }}</div>
		<select class="select" v-model="selectedWorker">
			<option value="" disabled>Select responsible</option>
			<option v-for="worker in workersList" :value="worker.id" :key="worker.id">{{ worker.name }}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: "DividerItem",
	props: {
		workersList: {
			type: Array,
			default: () => []
		},
		task: {
			type: Object,
			default: () => ({})
		},
		removedItem: {
			type: Object,
			default: () => ({})
		}
	},
	data() {
		return {
			selectedWorker: ''
		}
	},

	watch: {
		selectedWorker(newVal) {
			if (!newVal) return
			this.$emit('select-worker', newVal)
		},
		"removedItem.taskId"(newValue) {
			if (newValue === this.task.id) {
				this.selectedWorker = '';
			}
		},
	},
}
</script>
<style scoped>
.card {
	display: flex;
	align-items: center;
	gap: 30px;
	justify-content: space-between;
	max-width: 300px;
}

.select {
	max-width: 150px;
	width: 100%;
}
</style>