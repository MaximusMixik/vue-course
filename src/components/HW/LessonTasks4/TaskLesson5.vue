<template>
	<div>
		<fieldset>
			<legend>
				<h5> Вводиться логін і пароль.
					Поступово якщо якесь з полів не введено,
					то виводити повідомлення і поміщати
					фокус у потрібне поле
				</h5>
			</legend>
			<div>
				<label>
					Login
					<input ref="login" type="text" name="login" v-model.trim="login" placeholder="login">
				</label>
				<br>
				<label>
					Password
					<input ref="password" type="password" name="password" v-model="password" placeholder="password">
				</label>

			</div>
			<div v-if="message">
				{{ message }}
			</div>
			<button @click="check">submit</button>
		</fieldset>
	</div>
</template>

<script>
export default {
	name: "TaskLesson5",
	data() {
		return {
			login: null,
			password: null,
			message: '',
		};
	},
	methods: {
		check() {
			if (!this.login) {
				this.message = 'input your login'
				this.$refs.login.focus()
			}
			else if (!this.password) {
				this.message = 'input your password'
				this.$refs.password.focus()
			}
			else {
				this.message = null
			}
		}
	},
	mounted() {
		this.check()
	}
};
</script>
