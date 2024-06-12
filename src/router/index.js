import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../pages/homePage.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../pages/Dashboard.vue"),
    },
  ],
});

export default router;
