<template>
	<fieldset>
		<legend>
			<h4>
				Tasks Divider
			</h4>
		</legend>
		<h5>Tasks</h5>
		<div>
			<DividerItem v-for="task in tasksList" :key="task.id" :task="task" :workers-list="workersList"
				@select-worker="$emit('select-worker', { workerId: $event, taskId: task.id })" :removed-item="removedItem" />
		</div>
	</fieldset>
</template>

<script>
import DividerItem from './DividerItem.vue'

export default {
	name: "TasksDivider",
	components: {
		DividerItem,
	},
	props: {
		workersList: {
			type: Array,
			default: () => []
		},
		tasksList: {
			type: Array,
			default: () => []
		},
		removedItem: {
			type: Object,
			default: () => ({})
		}
	},
}
</script>
