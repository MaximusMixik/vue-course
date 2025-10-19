<template>
	<div>
		<fieldset>
			<legend>
				<h4>Mobile phones</h4>

			</legend>
			<div>
				<h5>Current phone number: {{ phoneList.length }}</h5>
				<div style="display: grid; grid-template-columns: repeat(3,1fr); gap:16px; max-width: fit-content;">
					<img v-for="(phone, ind) in phoneList" :key="ind" :src="phone"
						style="width: 200px; height:150px; object-fit: contain;" alt="phone">
				</div>
			</div>
		</fieldset>

	</div>
</template>

<script>
const phoneList = [
	"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
	"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
	"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
];
export default {
	name: 'PhoneComp',
	computed: {
		phoneList() {
			return phoneList
		}
	},
}
</script>
