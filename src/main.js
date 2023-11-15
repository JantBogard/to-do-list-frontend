import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import MesTache from "./components/MesTache.vue";
import AddTacheForm from "./components/AddTacheForm.vue";
import MesFavoris from "./components/MesFavoris.vue";
import TacheEffectuer from "./components/TacheEffectuer.vue";

const routes = [
  { path: "/mestache", component: MesTache },
  { path: "/mesfavoris", component: MesFavoris },
  { path: "/tacheeffectuer", component: TacheEffectuer },
  { path: "/addtacheform", component: AddTacheForm },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
