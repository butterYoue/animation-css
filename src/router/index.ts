import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: ()=> import('../views/LoginView.vue'),
  },
  {
    path: "/loding",
    name: "loading",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  //创建历史记录
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
