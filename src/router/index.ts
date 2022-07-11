import { createRouter, createWebHistory } from "vue-router";
import CharacterList from "../components/CharactersList.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: CharacterList }],
});
