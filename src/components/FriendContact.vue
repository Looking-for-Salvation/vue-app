<template>
   <li>
      <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="$emit('delete-contact', id)">Delete Contact</button>
      <ul v-if="detailsAreVisible">
         <li><strong>Phone : </strong>{{ phoneNumber }}</li>
         <li><strong>Email : </strong>{{ emailAddress }}</li>
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
      id: {
         type: String,
         required: true,
      },
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
   // Basic approach of emits
   emits: ["toggle-favorite", "delete-contact"],
   // More advanced approach of emits
   // emits: {
   //    "toggle-favorite": function(id) {
   //       if (id) {
   //          return true;
   //       } else {
   //          console.warn("Id is missing!");
   //          return false;
   //       }
   //    },
   // },
   data() {
      return {
         detailsAreVisible: false,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.$emit("toggle-favorite", this.id);
      },
   },
};
</script>
