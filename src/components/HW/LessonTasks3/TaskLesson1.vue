<template>
	<div>
		<h6>
			Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки
			це метрів, кілометрів.
		</h6>
		<fieldset>
			<label>
				<input type="number" v-model.number="cm" />
			</label>
			<div>
				метрів
				<strong>
					{{ meters }}
				</strong>
			</div>
			<div>
				кілометрів
				<strong>
					{{ kilometers }}
				</strong>
			</div>
		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson1",
	data() {
		return { cm: null };
	},
	computed: {
		meters() {
			return (this.cm / 100).toFixed(2);
		},
		kilometers() {
			return (this.meters / 1000).toFixed(5);
		},
	},
	methods: {},
};
</script>
