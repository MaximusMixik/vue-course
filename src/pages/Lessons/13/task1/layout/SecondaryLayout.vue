<template>
	<div>
		<header>
			<slot name="header">
				<nav>
					<router-link :to="{ name: 'home' }">
						To Home Page
					</router-link>
				</nav>
			</slot>
		</header>
		<main>
			<slot>
			</slot>
		</main>
		<footer>
			<slot name="footer">
				<div class="gallery">
					<div v-for="product in laptops" :key="product.id">
						<img class="image" :src="product.image" alt="Image">
					</div>
				</div>
			</slot>
		</footer>

	</div>
</template>

<script>
import { laptops } from '../../../13/lesson/constants/data.js'

export default {
	name: 'SecondaryLayout',
	computed: {
		laptops() {
			return laptops
		}
	},
}
</script>

<style scoped>
.gallery {
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(4, 1fr);
}

.image {
	width: 200px;
	height: 80px;
	max-width: 100%;
	object-fit: cover;
}
</style>