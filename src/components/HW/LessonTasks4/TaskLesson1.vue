
<template>
		<div>
			<h2>
				Задача 1. Спробуйте відтворити використовуючи відповідні компоененти
			</h2>
			<PhoneComp />
			<LatestComp />
		</div>
	</template>
	
	<script>
	import PhoneComp from './components/PhoneComp.vue'
	import LatestComp from './components/LatestComp.vue'
	export default {
		name: "TaskLesson1",
		components: {
			PhoneComp,
			LatestComp,
		},
	
	};
	</script>
	