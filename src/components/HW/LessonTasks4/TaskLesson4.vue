<template>
	<div>
		<fieldset>
			<legend>
				<h5>При відкритті сайту перевіряється вік користувача.
					<br>
					1)якщо не ввів, просимо ввести (поміщаємо фокус в елемент вводу)
					<br>
					2)якщо вік менше 18 років – доступ заборонено
					<br>
					3)якщо вік більше за 18 років – доступ дозволено


				</h5>
			</legend>
			<div>
				<label>
					User age
					<input ref="ageInput" type="number" name="userAge" v-model.number="userAge" placeholder="User age">
				</label>

			</div>
			<div v-if="message">
				== {{ message }} ==
			</div>
			<button @click="checkUserAge">submit</button>
		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson4",
	data() {
		return {
			userAge: null,
			message: '',
		};
	},
	computed: {
	},
	methods: {
		checkUserAge() {
			if (this.userAge === null) {
				this.message = 'input your age'
				this.$refs.ageInput.focus()
			}
			else {
				this.message = this.userAge < 18 ? 'доступ заборонено'
					: ' доступ дозволено'
			}
		}
	},
	mounted() {
		this.checkUserAge()

	}
};
</script>
