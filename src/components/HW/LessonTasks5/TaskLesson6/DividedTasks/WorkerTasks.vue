<template>
	<fieldset>
		<legend>
			<h3>{{ currentWorker.name }}</h3>
		</legend>
		<div class="box">
			<div class="card" v-for="task in workerTasks" :key="task.id">{{ task.title }} <button
					@click="$emit('delete', { taskId: task.id, workerId: worker.workerId })">delete</button></div>
		</div>
	</fieldset>
</template>

<script>

import { workersList, tasksList } from '../../constants/6_tasks_devider.js'

export default {
	name: 'WorkerTasks',
	props: {
		worker: {
			type: Object,
			default: () => ({})
		},
	},
	computed: {
		currentWorker() {
			return workersList.filter(w => w.id === this.worker.workerId)[0]
		},
		workerTasks() {
			return tasksList.filter(t => {
				for (let i = 0; i < this.worker.tasks.length; i++) {
					if (this.worker.tasks[i] === t.id)
						return t
				}
			})
		}
	},
}
</script>
<style scoped>
.box {
	display: grid;
	gap: 10px;
}

.card {
	display: flex;
	align-items: center;
	gap: 30px;
	justify-content: space-between;
	max-width: 250px;
}
</style>