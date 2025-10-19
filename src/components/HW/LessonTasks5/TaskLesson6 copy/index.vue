<template>
	<div>
		<h6>Task 6</h6>
		<div>
			<fieldset>
				<legend>
					<h4>All workers list</h4>
				</legend>
				<ul>
					<li v-for="worker in workersList" :key="worker.id">
						{{ worker.name }}
					</li>
				</ul>
			</fieldset>
			<TaskDivider :workers-list="workersList" :tasks-list="tasksList" :removed-item="removedItem"
				@worker-selected="workerSelected" />

			<fieldset v-if="selectedWorker.length > 0">
				<legend>
					<h4>Divided tasks</h4>
				</legend>
				<div class="container">
					<DividedTasks v-for="item in selectedWorker" :worker-data="item" :key="item.id" @remove-task="removeTask" />
				</div>
			</fieldset>
		</div>
	</div>
</template>

<script>
import TaskDivider from "./TaskDivider";
import DividedTasks from "./DividedTasks";
import { workersList, tasksList } from "../constants/tasks_devider.js";
export default {
	name: "TaskLesson6",
	components: {
		TaskDivider,
		DividedTasks,
	},
	data() {
		return {
			workersList,
			tasksList,
			selectedWorker: [],
			removedItem: {
				workerId: null,
				taskId: null,
			},
		};
	},
	methods: {
		workerSelected(workerId, taskId) {
			const currentWorker = this.workersList.find((worker) => worker.id === workerId);
			const currentTask = this.tasksList.find((task) => task.id === taskId);
			console.log(currentWorker, currentTask);

			const userInd = this.selectedWorker.findIndex((worker) => worker.id === workerId);
			// console.log(userInd);
			// alert(userInd);
			if (userInd !== -1) {
				// alert("add");
				this.selectedWorker[userInd].tasksList.push(currentTask);
			} else {
				// alert("create");
				// const id = new Date();
				// id: id.getTime(),
				const workerTasks = {
					...currentWorker,
					tasksList: [currentTask],
				};
				this.selectedWorker.push(workerTasks);
			}
		},

		removeTask({ taskId, workerId }) {
			this.removedItem = { taskId, workerId };

			const currentWorkerInd = this.selectedWorker.findIndex(
				(worker) => worker.id === workerId
			);
			const currentWorker = this.selectedWorker[currentWorkerInd];
			if (currentWorker.tasksList.length <= 1) {
				this.selectedWorker.splice(currentWorkerInd, 1);
			} else {
				const currentTaskIndex = currentWorker.tasksList.findIndex(
					(task) => task.id === taskId
				);
				currentWorker.tasksList.splice(currentTaskIndex, 1);
			}
		},
	},
};
</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: start;
	min-height: 200px;
}
</style>
