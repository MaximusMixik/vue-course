<template>
	<div class="card">
		<div class="header">
			<slot name="header" :item="item">
				<div>
					{{ item.price }} uan
					<template v-if="item.oldPrice">
						, <span style="text-decoration: line-through; color:red;">{{ item.oldPrice }}uan</span>
					</template>
				</div>
				<div>
					{{ item.inStock ? 'in Stock' : 'not in stock' }}
				</div>
			</slot>
		</div>

		<div class="media">
			<slot name="media" :item="item">
				<img :src="item.image" alt="Image">
			</slot>
		</div>
		<div class="footer">
			<slot name="footer" :item="item">
				<div>
					{{ item.name }}
				</div>
				<div>
					{{ item.description }}
				</div>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		item: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style scoped>
.card {
	padding: 8px;
	display: grid;
	gap: 8px;
	border: 1px solid greenyellow;
}

.header {
	display: flex;
	justify-content: space-between;
	gap: 20px
}

.media img {
	max-width: 100%;
	display: block;
	background: gainsboro;
	aspect-ratio: 1 / 1;
	object-fit: cover;
}
</style>