<template>
	<div class="wrapper">
		<header>
			<slot name="header">
				<h2>Im header</h2>
				<nav>
					<router-link :to="{ name: 'home' }">Home</router-link>
					|
					<router-link :to="{ name: 'lesson13' }">Lesson13</router-link>
					|
					<router-link :to="{ name: 'about' }">About</router-link>
					|
					<router-link :to="{ name: 'contacts' }">Contacts</router-link>
					|
					<router-link :to="{ name: 'login' }">Login</router-link>
				</nav>
			</slot>
		</header>

		<hr>

		<main>
			<slot>
				<h2>Im content</h2>
			</slot>
		</main>

		<hr>

		<footer>
			<slot name="footer">
				<h2>Im footer</h2>
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