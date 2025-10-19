<template>
	<div>
		<!-- {{ item }} -->
		<img :src="item.src" style="width: 200px; height:150px; object-fit: contain;" alt="phone">
		<h6>{{ item.title }}</h6>


		<template v-if="item.reviewsCount && item.rating">
			<a :href="item.id">
				<span> rating:{{ item.rating }} </span>
				reviews:{{ item.reviewsCount }}
			</a>
		</template>
		<template v-else>
			<a :href="item.id">{{ item.reviews }}</a>
		</template>


		<p>{{ item.availability }}</p>


		<del v-if="item.oldPrice">
			{{ item.oldPrice }} {{ item.currency }}
		</del>

		<p :style="[item.oldPrice ? 'color:red;' : null]">
			{{ item.price }} {{ item.currency }}
		</p>


	</div>
</template>

<script>
export default {
	name: 'LatestItem',
	props: {
		item: {
			type: Object,
			require: true
		},
	},
}
</script>