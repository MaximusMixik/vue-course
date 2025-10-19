<template>
	<div>
		<fieldset>
			<legend>
				<h5>
					Розробити компонент для введення віку користувача (з підтримкою v-model).
					При заданні модифікатора check не допускати введення некоректного віку
					(вік не може бути більшим за 150).
					При заданні модифікатора setColor задавати фон
					(вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий). </h5>
			</legend>
			<div>
				<InputComponent label="Age input with Check modifiers" v-model.check.setColor="userAge" />
			</div>
		</fieldset>
	</div>
</template>

<script>
import InputComponent from './InputComponent.vue'
export default {
	name: "TaskLesson1",
	components: {
		InputComponent,
	},
	data() {
		return {
			userAge: null
		}
	},
}
</script>
