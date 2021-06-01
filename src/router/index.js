import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain";
import TheBlog from "../views/TheBlog";
import MobilePortfolio from "../views/MobilePortfolio.vue";

const routes = [
  { path: "/", name: "main", component: TheMain },
  { path: "/blog", name: "blog", component: TheBlog },
  { path: "/mPortfolio", name: "mPortfolio", component: MobilePortfolio },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
