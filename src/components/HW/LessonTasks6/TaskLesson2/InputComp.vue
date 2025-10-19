<template>
	<div>
		<label>
			{{ label }}
			<br>
			<input type="text" v-model.trim="inputValue" :class="{ 'error': hasError }">
		</label>

		<!-- Для теста -->
		<p>Поточне значення: {{ inputValue }}</p>
		<img src="./heart.svg" alt="Static image" width="50">
	</div>
</template>

<script>
export default {
	name: 'InputComp',
	props: {
		label: String,
		modelValue: String,
		modelModifiers: { // ВАЖНО! Чтобы поддержать модификатор checkPath
			type: Object,
			default: () => ({})
		}
	},
	computed: {
		inputValue: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				this.$emit('update:modelValue', newVal)
			}
		},

		hasError() {
			if (!this.modelModifiers.checkPath) return false

			// Проверяем, что строка оканчивается на .js
			const isJsFile = /\.js$/i.test(this.modelValue)

			// Проверяем, является ли это валидным URL или относительным путем
			const isValidUrl = this.isValidURL(this.modelValue)

			return !(isJsFile && isValidUrl)
		}
	},
	methods: {
		isValidURL(str) {
			try {
				// Пробуем создать URL (поддерживает абсолютные ссылки)
				new URL(str)
				return true
			} catch {
				// Проверим относительные пути (например "./test-file.js")
				return /^\.{0,2}\/[\w./-]+$/.test(str)
			}
		}
	}
}
</script>

<style scoped>
input {
	padding: 4px 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

input.error {
	background-color: #dd1313;
	border-color: red;
}
</style>
