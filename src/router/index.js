import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../components/HomePage.vue'
import ClimatePage from '../components/Climate.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/climate', component: ClimatePage }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
