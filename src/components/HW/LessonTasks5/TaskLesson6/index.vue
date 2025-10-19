<template>
	<div>
		<TasksDivider :tasks-list="tasksList" :workers-list="workersList" @select-worker="selectWorker"
			:removed-item="removedItem" />
		<DividedTasks :assigned-tasks="assignedTasks" @delete="onDelete" />
	</div>
</template>

<script>

import { workersList, tasksList } from '../constants/6_tasks_devider.js'
import TasksDivider from './TasksDivider'
import DividedTasks from './DividedTasks'

export default {
	name: 'TaskLesson6',
	components: {
		TasksDivider,
		DividedTasks,
	},
	data() {
		return {
			workersList,
			tasksList,
			assignedTasks: [],
			removedItem: {
				workerId: null,
				taskId: null,
			},
		}
	},
	methods: {
		selectWorker({ workerId, taskId }) {
			let currentWorker = this.assignedTasks.findIndex(w => w.workerId === workerId)
			if (currentWorker !== -1) {
				this.assignedTasks[currentWorker].tasks.push(taskId)
			}
			else {
				this.assignedTasks.push({ workerId, tasks: [taskId] })
			}
		},
		onDelete({ workerId, taskId }) {
			this.removedItem = { workerId, taskId }

			let currentWorker = this.assignedTasks.findIndex(w => w.workerId === workerId)
			if (this.assignedTasks[currentWorker].tasks.length > 1) {
				this.assignedTasks[currentWorker].tasks = this.assignedTasks[currentWorker].tasks.filter(tId => tId !== taskId)
			}
			else {
				this.assignedTasks.splice(currentWorker, 1)
			}
		}
	},

}
</script>
