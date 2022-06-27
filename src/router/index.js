// import Vue from "vue";
import {
  createRouter,
  //  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import * as moviesConstants from "@/constants/movies.constants";

const { routers: moviesRouter } = moviesConstants;
const routes = [
  {
    path: moviesRouter.MOVIES_LIST_PATH,
    name: moviesRouter.MOVIES_LIST_NAME,
    component: () => import("@/layout/layout-home.vue"),
    // redirect: moviesRouter.MOVIES_LIST_PATH,
  },
  {
    path: moviesRouter.MOVIES_DETAIL_PATH,
    name: moviesRouter.MOVIES_DETAIL_NAME,
    component: () => import("@/views/movie-detail/movie-detail.vue"),
    // redirect: moviesRouter.MOVIES_DETAIL_PATH,
  },

  {
    path: "/",
    redirect: moviesRouter.MOVIES_LIST_PATH,
  },
];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes, // short for `routes: routes`
// });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
