import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Admin from "@/components/Admin.vue";

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
  ];
}

const router = new Router({
  mode: "history",
  routes: configRoutes(),
  scrollBehavior: () => ({ y: 0 }),
});
export default router;
