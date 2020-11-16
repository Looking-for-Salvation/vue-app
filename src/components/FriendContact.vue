<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li>{{ friend.phone }}</li>
			<li>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	name: "Friend Contact",
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "123 456 7890",
				email: "manuel@localhost.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
