import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import jobsView from "@/views/Jobs/JobsView";
import JobDetails from "@/views/Jobs/component/JobDetails";
import NotFound from "@/views/NotFound";

const routes =
    [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: "/jobs",
        name: "jobs",
        component: jobsView,
      },
      {
          path: "/jobs/:id",
          name: "JobDetails",
          component: JobDetails,
          props: true,
      },
        // redirect
        {
            path: "/all-jobs",
            redirect: "/jobs"
        },
        // catchall 404
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound,
        }
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
