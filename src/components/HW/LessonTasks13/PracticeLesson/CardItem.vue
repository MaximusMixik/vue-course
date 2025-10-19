<template>
	<div class="card">
		<div class="card__wrapper">
			<div class="card__header">
				<div class="card__name">
					<slot>
						{{ data.name }}
					</slot>
				</div>
				<div class="card__age">
					<slot name="age">
						{{ data.age }}
					</slot>
				</div>
			</div>
			<div class="card__body">
				<slot name="image" :data="data">
					<img :src="data.imgSrc" alt="Image">
				</slot>
			</div>
			<div class="card__footer">
				<slot name="footer">
					{{ data.gender }}
				</slot>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'CardItem',
	props: {
		data: {
			type: Object,
			default: () => ({ name: 'Default', age: 'Default', imgSrc: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop', gender: 'Default' })
		},
	},
}
</script>

<style>
.card {}

.card__wrapper {
	border: 1px solid lightgreen;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.card__header {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.card__name {}

.card__age {}

.card__body {}

.card__body>img {
	display: block;
	width: 100%;
	max-width: 100%;
	/* height: auto; */
	background-color: gray;
	object-fit: cover;
	aspect-ratio: 4 / 3;
}

.card__footer {}
</style>