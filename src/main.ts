import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import intersection from "./directives/intersection";
import apolloProvider from "./graphql/provider";

const app = createApp(App);

app.use(router);
app.use(apolloProvider);

//replace with a cyclic connection of directives
app.directive(intersection.name, intersection);

app.mount("#app");
