import { createRouter, createWebHistory } from "vue-router";
import CharacterList from "../components/CharactersList.vue";
import CharacterPage from "../components/CharacterPage.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: CharacterList },
    { path: "/characters/:id", component: CharacterPage },
  ],
});
