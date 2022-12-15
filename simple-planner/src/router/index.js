import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/add",
    name: "AddProject",
    component: import("@/views/AddProject"),
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: import("@/views/EditProjectView"),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
