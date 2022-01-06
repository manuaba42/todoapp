import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:task',
    name: 'Task',
    component: Task,
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
