import { createRouter, createWebHistory } from "vue-router";
import CharacterList from "../components/list/CharactersList.vue";
import CharacterPage from "../components/characterPage/CharacterPage.vue";
import LocationPage from "../components/locationPage/LocationPage.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: CharacterList },
    { path: "/characters/:id", component: CharacterPage },
    { path: "/location/:id", component: LocationPage },
  ],
});
