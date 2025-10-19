<template>
	<div>
		<fieldset>
			<legend>
				<h4>latest Viewed List</h4>
			</legend>
			<div>
				<h5>Current phone number: {{ latestViewedList.length }}</h5>
				<div style="display: grid; grid-template-columns: repeat(3,1fr); gap:16px; ">
					<LatestItem v-for="item in latestViewedList" :key="item.id" :item="item" />
				</div>

			</div>
		</fieldset>

	</div>
</template>

<script>
import LatestItem from './LatestItem.vue'
const latestViewedList = [
	{
		id: 66,
		title: "Портативний екран TouYinger 130″",
		availability: "Є в наявності",
		price: 1899,
		currency: "₴",
		src: "https://picsum.photos/seed/touyinger/400/300",
		reviews: "Залишити відгук",
	},
	{
		id: 45,
		title: "Портативний монітор MUCAI N116A black 11,6″",
		availability: "Є в наявності",
		price: 2950,
		currency: "₴",
		src: "https://picsum.photos/seed/mucai/400/300",
		reviews: "Залишити відгук",
	},
	{
		id: 23,
		title: "Шафа розпашна Roko Дуб Венге 90x50x204.5 см",
		availability: "Немає в наявності",
		price: 2976,
		oldPrice: 3504,
		currency: "₴",
		rating: 4.5,
		reviewsCount: 29,
		src: "https://picsum.photos/seed/roko/400/300",
	},
];

export default {
	name: 'LatestComp',
	components: {
		LatestItem,
	},
	computed: {
		latestViewedList() {
			return latestViewedList
		}
	},
}
</script>
