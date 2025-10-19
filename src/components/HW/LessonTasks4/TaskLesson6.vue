<template>
	<div>
		<fieldset>
			<legend>
				<h5>
					Вводиться 3 оцінки. Поступово якщо якась з оцінок не введена, то виводити повідомлення і поміщати
					фокус у потрібне поле. Знайти мінімальну оцінку.
				</h5>
			</legend>
			<div>
				<div v-for="i in 3" :key="i">
					<label>score {{ i }}
						<input ref="input" type="number" v-model.number="scores[i - 1]" :placeholder="`input score ${i}`"></label>
				</div>
				{{ scores }}
				<br>
				<button @click="getMinimalScore">Minimal score</button>

			</div>

		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson6",
	data() {
		return {
			scores: []
		};
	},
	methods: {
		getMinimalScore() {
			if (!this.scores.length) {
				this.$refs.input[this.scores.length].focus()
			}

			for (let i = 1; i < this.scores.length; i++) {

				if (!this.scores[i]) {
					this.$refs.input[this.scores.length].focus()

				}
			}
		}
	},
	mounted() {
		this.getMinimalScore()
	}
};
</script>
