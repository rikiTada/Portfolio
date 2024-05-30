import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/pages/Home.vue";
import ThanksPage from "../components/pages/ThanksPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/thanks",
    name: "thanks",
    component: ThanksPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
