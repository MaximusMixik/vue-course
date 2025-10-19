<template>
	<div>
		<h6>
			Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. Якщо не
			введено дозволену швидкість, то елемент введення поточної швидкості
			заблокований. Якщо швидкість менше 50% дозволеної, то колір input –
			оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо
			значення вище 90% починає блимати повідомлення «Увага!»
		</h6>
		<fieldset :class="currentInputClass">
			<label>
				Вводиться дозволена швидкість
				<input type="number" v-model.number="speedLimit" />
			</label>
			<label>
				Вводиться поточна швидкість
				<input type="number" :disabled="!speedLimit" v-model.number="currentSpeed" />
			</label>
		</fieldset>
		<div v-show="message" class="red">«Увага!»</div>
	</div>
</template>

<script>
export default {
	name: "TaskLesson4",
	data() {
		return { speedLimit: null, currentSpeed: null, message: false };
	},
	computed: {
		currentPercentSpeed() {
			if (!this.speedLimit && !this.currentSpeed) return "";
			return (this.currentSpeed / this.speedLimit) * 100;
		},
		currentInputClass() {
			let currentClass;
			if (!this.currentPercentSpeed) currentClass = "";
			else if (this.currentPercentSpeed <= 50) currentClass = "orange";
			else if (this.currentPercentSpeed <= 100) currentClass = "green";
			else currentClass = "red";

			if (this.currentPercentSpeed >= 90) {
				this.showMessage();
			}

			return currentClass;
		},
	},
	methods: {
		showMessage() {
			if (!this.speedLimit && !this.currentSpeed) return;

			if (this.currentPercentSpeed >= 90) {
				setTimeout(() => {
					this.message = this.message ? false : true;

					this.showMessage();
				}, 200);
			}
		},
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
</style>
