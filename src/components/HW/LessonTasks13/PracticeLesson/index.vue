<template>
	<div>
		<h1>SLOTS</h1>
		<div class="container">
			<!-- default -->
			<CardItem />
			<!-- with props -->
			<CardItem :data="{ name: 'Max', age: 29, gender: 'male' }" />
			<!-- use slots -->
			<CardItem :data="{ imgSrc: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' }">
				<!-- default slot (without name)-->
				<template #default>
					custom name
				</template>
				<template #age>
					custom age
				</template>
				<template #image="{ data }">
					<img :src="data.imgSrc" alt="Image">
				</template>
				<template #footer>
					custom footer
				</template>
			</CardItem>
		</div>
	</div>
</template>

<script>

import CardItem from './CardItem.vue';
export default {
	name: 'PracticeLesson',
	components: {
		CardItem,
	},
}
</script>
<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
</style>