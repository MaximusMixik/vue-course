<template>
	<div class="wrapper">
		<header>
			<slot name="header">
				<h2>Im Header </h2>
				<nav>
					<router-link :to="{ name: 'home' }">Go to Home page</router-link>
				</nav>
			</slot>
		</header>

		<hr>

		<main>
			<slot>
				<h2>Im Form </h2>
			</slot>
		</main>

		<hr>

		<footer>
			<slot name="footer">
				<h2>You in admin page? Sign in Profile for use it</h2>
			</slot>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'MainLayout'
}
</script>

<style lang="scss" scoped></style>