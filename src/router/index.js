import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NotFound from "../views/NotFound.vue";

// Temporary
import InputShowcase from "../views/InputShowcase.vue";
import ButtonsShowcase from "../views/ButtonsShowcase.vue";
import GroupDashboard from "../views/GroupDashboard.vue";
import Quiz from "../views/Quiz.vue";
// -------/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    // temporary demo routes
    {
      path: "/inputShowcase",
      name: "inputShowcase",
      component: InputShowcase,
    },
    {
      path: "/buttonShowcase",
      name: "buttonShowcase",
      component: ButtonsShowcase,
    },
    {
      path: "/groupDashboard",
      name: "groupDashboard",
      component: GroupDashboard,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
