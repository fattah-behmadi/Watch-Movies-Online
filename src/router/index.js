import { createRouter, createWebHistory } from "vue-router";
import * as moviesConstants from "@/constants/movies.constants";

const { routers: moviesRouter } = moviesConstants;
const routes = [
  {
    path: moviesRouter.MOVIES_LIST_PATH,
    name: moviesRouter.MOVIES_LIST_NAME,
    component: () => import("@/views/movies-list/movies-list.vue"),
  },
  {
    path: moviesRouter.MOVIES_DETAIL_PATH,
    name: moviesRouter.MOVIES_DETAIL_NAME,
    component: () => import("@/views/movie-detail/movie-detail.vue"),
  },
  {
    path: "/",
    redirect: moviesRouter.MOVIES_LIST_PATH,
  },
  {
    path: "/:catchAll(.*)",
    redirect: moviesRouter.MOVIES_LIST_PATH,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
