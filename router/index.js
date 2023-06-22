import { createRouter, createWebHistory } from "vue-router";
import Homemain from "../components/home/homemain.vue";
import Storemain from "../components/story/storemain.vue";
import Cart from "../components/cart/cart.vue";
import Matchmain from "../components/match/matchmain.vue";
import Blog from "../components/Blogs/blog.vue";
const routes = [
  {
    path: "/",
    name: "homemain",
    component: Homemain,
  },
  {
    path: "/storemain",
    name: "storemain",
    component: Storemain,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/matchmain",
    name: "matchmain",
    component: Matchmain,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
