<template>
	<div>
		<h6>
			Задача 2. З клавіатури вводиться температура. Змінювати колір фону у
			залежності від значення: менше нуля – білий від 0 до 10 – синій, від 11 до
			22 – зелений вище 22 – червоний Реалізувати з класами і стилями.
		</h6>
		<!-- :style="{ backgroundColor: inputClass }" -->
		<fieldset :class="inputClass">
			<input type="number" v-model.number="temperature">
			{{ inputClass }}
		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson2",
	data() {
		return { temperature: null };
	},
	computed: {
		inputClass() {
			let className = ''
			if (this.temperature === null) return className
			
			if (this.temperature < 0) className = 'white'
			else if (this.temperature < 11) className = 'blue'
			else if (this.temperature <= 22) className = 'green'
			else className = 'red'
			return className
		}

	},
	methods: {},
};
</script>
<style scoped>
.white {
	background: rgb(186, 255, 253);
}

.blue {
	background: blue;
}

.green {
	background: green;
}

.red {
	background: red;
}
</style>
