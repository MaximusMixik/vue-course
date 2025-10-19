<template>
	<fieldset>
		<legend>
			<h5>
				Розробити компонент (з підтримкою v-model),
				який дозволяє вводити шлях до файлу js
				(URL, що закінчується розширенням js).
				При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.
			</h5>
		</legend>

		<div>
			<InputComp label="вводити шлях до файлу js" v-model.checkPath="path" />
			{{ path }}
		</div>
	</fieldset>
</template>

<script>

import InputComp from './InputComp.vue'
export default {
	name: "TaskLesson2",
	components: {
		InputComp,
	},
	data() {
		return {
			path: ''
		}
	},
}
</script>
