<template>
	<div class="container">
		<header>
			<nav>
				<router-link :to="{ name: 'home' }">
					Home
				</router-link>
				|
				<router-link :to="{ name: 'products' }">
					Products
				</router-link>
				|
				<router-link :to="{ name: 'suppliers' }">
					Supplier
				</router-link>
				|
				<router-link :to="{ name: 'contacts' }">
					Contacts
				</router-link>
				|
				<router-link :to="{ name: 'rules' }">
					Rules
				</router-link>
			</nav>
		</header>
		<main>
			<slot>
				<div>
					<h1>Welcome!</h1>
					<h4>I hope you will be a good boy and buy a lot of goods.</h4>
				</div>
			</slot>
		</main>
		<footer class="footer">
			<div>
				<slot name="footer-left">
					Shop rate: 54449
				</slot>
			</div>
			<div>
				<slot name="footer-right">
					Status: open
				</slot>
			</div>

		</footer>
	</div>
</template>

<script>
export default {
	name: 'AppLayout'
}
// export { default as AppLayout } from './app/index.vue'
</script>

<style scoped>
.container {
	max-width: 1170px;
	padding-inline: 24px;
	margin-inline: auto;
}

.footer {
	display: flex;
	justify-content: space-between;
	gap: 30px;
}
</style>