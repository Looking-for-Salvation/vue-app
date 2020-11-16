<template>
	<section>
		<h2>Friends</h2>
		<ul>
			<friend-contact></friend-contact>
		</ul>
	</section>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "123 456 7890",
					email: "manuel@localhost.com",
				},
				{
					id: "jolie",
					name: "Jolie Jones",
					phone: "098 765 4321",
					email: "jolie@localhost.com",
				},
			],
		};
	},
};
</script>

<style></style>
