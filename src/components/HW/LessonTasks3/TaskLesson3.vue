<template>
	<div>
		<h6>
			Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. Якщо не
			введено дозволену швидкість, то елемент введення поточної швидкості
			заблокований. Якщо швидкість менше 50% дозволеної, то колір input –
			оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо
			значення вище 90% починає блимати повідомлення «Увага!»
		</h6>
		<fieldset>
			<label>
				<span>Вводиться дозволена швидкість авто
				</span>
				<input type="number" v-model.number="speedLimit">
			</label>
			<br>
			<br>
			<label>
				<span>Вводиться поточна швидкість авто
				</span>
				<input :class="currentSpeedClass" :disabled="!speedLimit" type="number" v-model.number="currentSpeed">
			</label>

			<div v-show="errorState" class="error">«Увага!»</div>
		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson4",
	data() {
		return {
			speedLimit: null,
			currentSpeed: null,
		};
	},
	computed: {
		isEmpty() {
			return this.speedLimit === null || this.currentSpeed === null
		},
		percentage() {
			if (this.isEmpty) return ""
			return Math.floor((this.currentSpeed / this.speedLimit) * 100)
		},
		currentSpeedClass() {
			if (this.isEmpty) return ""

			if (this.percentage < 50) return 'orange'
			else if (this.percentage <= 100) return 'green'
			else return 'red'
		},
		errorState() {
			// if (this.isEmpty) return false
			if (!this.isEmpty && this.percentage >= 90) return true
			return false
		},
	},
	methods: {
		// todo add set timeout blink
	},
};
</script>
<style scoped>
.orange {
	background: orange;
}

.green {
	background: green;
}

.red {
	background: red;
}

.error {
	animation: blink 1s step-start infinite;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}
</style>
