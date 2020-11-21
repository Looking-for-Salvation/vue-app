import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import AddContact from "./components/AddContact.vue";

createApp(App)
   .component("friend-contact", FriendContact)
   .component("add-contact", AddContact)
   .mount("#app");
