<template>
	<label>
		<span>{{ label }}</span>
		<select v-model="selectedValue">
			<!-- list -->
			<option v-for="item in getListWithClear" :id="item.value" :value="item.value" :key="item.value">
				{{ item.name }}
			</option>
		</select>
	</label>
	<hr>
</template>

<script>
export default {
	name: 'SelectFilter',
	props: {
		label: {
			type: String,
			default: 'Label'
		},
		modelValue: {
			type: [Number, String, null],
			required: true,
		},
		list: {
			type: Array,
			required: true,
		}
	},
	emits: ['update:modelValue'],
	computed: {
		selectedValue: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				this.$emit('update:modelValue', newVal)
			},
		},
		getListWithClear() {
			return [{
				id: new Date().getTime(),
				name: 'Show all',
				value: null,
			}, ...this.list]
		}
	},
}
</script>

<style lang="scss" scoped></style>