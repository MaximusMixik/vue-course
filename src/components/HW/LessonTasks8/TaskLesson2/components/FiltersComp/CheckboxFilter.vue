<template>
	<div>
		<div>{{ label }}</div>
		<label :for="`body-${item.value}`" v-for="item in list" :key="item.value" class="item">
			{{ item.name }}
			<input :value="item.value" type="checkbox" :id="`body-${item.value}`" name="body" v-model="selectedValue">
		</label>
		<!-- {{ selectedValue }} -->
		<!-- TODO add showmore -->

		<button @click="clear">Clear</button>
		<hr>
	</div>
</template>

<script>
export default {
	name: 'CheckboxFilter',
	props: {
		label: {
			type: String,
			default: 'Label'
		},
		modelValue: {
			type: Array,
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

	},
	methods: {
		clear() {
			this.$emit('update:modelValue', [])
		}
	},
}
</script>

<style scoped>
.item {
	display: flex;
}
</style>