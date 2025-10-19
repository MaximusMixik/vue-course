<template>
	<!-- создание нового  с модифицированным выводом-->
	<div>
		<slot :list="list">
			<h3>{{ title }}</h3>
		</slot>
		<div class="container">
			<ProductItem v-for="item in list" :item="item" :key="item.id">
				<template #header="{ item }">
					<div>
						{{ item.specs.capacity }}
						, <strong>{{ item.specs.voltage }}</strong>
					</div>
					<div>
						{{ item.inStock ? 'in Stock' : 'not in stock' }}
					</div>
				</template>
				<template #media="{ item }">
					<div>
						{{ item.description }}
					</div>
					<img :src="item.image" alt="Image">
				</template>

				<template #footer="{ item }">
					<div>
						{{ item.name }}
					</div>
				</template>
			</ProductItem>
		</div>
	</div>

	<!-- передача в компонент списка  с модифицированным выводом-->
	<!-- <ProductList :title="title" :list="list">
		<template #list="{ list }">
			<ProductItem v-for="item in list" :item="item" :key="item.id">
				<template #header="{ item }">
					<div>
						{{ item.specs.capacity }}
						, <strong>{{ item.specs.voltage }}</strong>
					</div>
					<div>
						{{ item.inStock ? 'in Stock' : 'not in stock' }}
					</div>
				</template>
				<template #media="{ item }">
					<div>
						{{ item.description }}
					</div>

					<img :src="item.image" alt="Image">

				</template>

				<template #footer="{ item }">
					<div>
						{{ item.name }}
					</div>
				</template>
			</ProductItem>
		</template>
	</ProductList> -->

</template>

<script>
import ProductItem from './ProductItem.vue';
// import ProductList from './ProductList.vue';

export default {
	name: 'ProductListModifier',
	components: {
		ProductItem,
		// ProductList
	},
	props: {
		title: {
			type: String,
			default: 'TITLE',
		},
		list: {
			type: Array,
			default: () => []
		},
	},
}
</script>

<style scoped>
.container {
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, 1fr);
}

.media img {
	max-width: 100%;
	display: block;
	background: gainsboro;
	aspect-ratio: 1 / 1;
	object-fit: cover;
}
</style>