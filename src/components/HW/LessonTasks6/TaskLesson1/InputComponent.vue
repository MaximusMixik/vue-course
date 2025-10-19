<template>
	<label>
		{{ label }}
		<input :class="inputColor" type="number" v-model="inputValue">
		<div v-if="message">{{ message }}</div>
	</label>
</template>

<script>
export default {
	name: 'InputComponent',
	props: {
		label: {
			type: String,
			default: 'Label'
		},
		modelValue: {
			type: Number,
			default: 0
		},
		modelModifiers: {
			default: () => ({})
		}
	},
	data() {
		return {
			message: ''
		}
	},
	computed: {
		inputValue: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				if (this.modelModifiers.check && newVal > 150) {
					this.message = 'вік не може бути більшим за 150'
					this.$emit('update:modelValue', null)
				} else {
					this.message = ''
					this.$emit('update:modelValue', newVal)
				}
			}
		},

		inputColor() {
			let colorClass = ''

			if (this.modelModifiers.setColor && this.modelValue) {
				if (this.modelValue < 10) colorClass = 'green'
				else if (this.modelValue < 21) colorClass = 'yellow'
				else colorClass = 'orange'
			}

			return colorClass
		}

	},
}
</script>
<style scoped>
.orange {
	background-color: orange;
}

.yellow {
	background-color: yellow;
}

.green {
	background-color: green;
}
</style>
