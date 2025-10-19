<template>
	<div>
		<fieldset>
			<legend>
				<h5>
					Задача 14. Розробити форму для бронювання номера у готелі (придумайте самі які мають бути поля)
				</h5>
			</legend>

			<fieldset>
				<legend>
					<h5>Form</h5>
				</legend>


				<div>
					<label>
						Name
						<input type="text" v-model.trim="form.name" placeholder="name">
					</label>
				</div>

				<div>
					<label>
						Age
						<input type="number" v-model.number="form.age" placeholder="age ">
					</label>
				</div>

				<div>
					<label>
						Gender
						<input type="radio" name="gender" v-model="form.gender" value="male"> Male
						<input type="radio" name="gender" v-model="form.gender" value="female"> female
					</label>
				</div>
				<div>
					<label>
						Has car?
						<input type="checkbox" name="car" v-model="form.car">
					</label>
				</div>
				<div>
					<label>

						<select v-model="form.position">
							<option disabled value="">Будь ласка, оберіть варіант</option>
							<option v-for="item in selectOptions" :key="item.value" :value="item.value">
								{{ item.title }}
							</option>
						</select>
					</label>

				</div>
				<button @click.prevent="addToList">
					add to list
				</button>
			</fieldset>

			<div v-if="usersList.length">
				<div v-for="user in usersList" :key="user.name">
					{{ user }}
				</div>
			</div>
		</fieldset>


	</div>
</template>

<script>
const defaultState = {
	name: null,
	age: null,
	gender: null,
	car: false,
	position: '', // empty string show like placeholder
}

const selectOptions = [
	{ title: 'Manager', value: 'manager' },
	{ title: 'SEO', value: 'seo' },
	{ title: 'Founder', value: 'founder' },
]
export default {
	name: "TaskLesson10",
	data() {
		return {
			form: {
				...defaultState
			},
			usersList: []
		};
	},

	computed: {
		selectOptions() {
			return selectOptions
		}
	},

	methods: {
		addToList() {
			this.usersList.push(this.form)
			this.form = { ...defaultState }
		}
	},
};
</script>
