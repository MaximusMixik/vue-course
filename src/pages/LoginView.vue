<template>
	<auth-layout>
		<div>
			<h1>LoginView</h1>

			<form action="">
				<div>
					<label for="">
						<span>first name</span>
						<input type="text" placeholder="first name">
					</label>
				</div>
				<div>
					<hr>
					<label for="">
						<span>last name</span>
						<input type="text" placeholder="last name">
					</label>
				</div>
				<hr>
				<div>
					<label for="">
						<span>age</span>
						<input type="number" placeholder="age">
					</label>
				</div>
			</form>
		</div>
	</auth-layout>
</template>

<script>
export default {
	name: 'LoginView',
}
</script>

<style lang="scss" scoped></style>