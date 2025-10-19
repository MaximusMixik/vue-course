<template>
	<label>
		вводити шлях до JavaScript-файлу (URL, що закінчується на .js)
		<input type="text" v-model="currentValue" />
	</label>
</template>

<script>
export default {
	name: "CustomInput",
	props: {
		modelValue: {
			type: String,
			default: "",
		},
	},
	computed: {
		currentValue: {
			get() {
				return this.modelValue;
			},
			set(newVal) {
				this.$emit("update:modelValue", newVal);
			},
		},
	},
};
// Простейшая проверка: URL заканчивается на .js
//   return !/^https?:\/\/.+\.js$/.test(this.modelValue);
</script>
