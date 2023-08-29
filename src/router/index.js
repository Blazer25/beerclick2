import { createRouter, createWebHistory } from "vue-router";

import Menu from "../views/Menu/index.vue";
import Jogo from "../views/Jogo/index.vue";

const routes = [
  {
    path: "/",
    name: "Menu_",
    component: Menu,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/jogo",
    name: "Jogo",
    component: Jogo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
