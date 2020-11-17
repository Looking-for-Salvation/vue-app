<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
		<button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<ul v-if="detailsAreVisible">
			<li>{{ phoneNumber }}</li>
			<li>{{ emailAddress }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	name: "Friend Contact",
	// Props as Array
	// props: [
	// 	'name',
	// 	'phoneNumber',
	// 	'emailAddress'
	// ],
	props: {
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {
			detailsAreVisible: false,
			friendIsFavorite: this.isFavorite,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.friendIsFavorite = !this.friendIsFavorite;
		},
	},
};
</script>
