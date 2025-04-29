import Vue from 'vue'
import Router from 'vue-router'
import Climate from './components/Climate.vue'
import Energy from './components/Energy.vue'
import Projects from './components/Projects.vue'
import Books from './components/Books.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/climate', component: Climate },
    { path: '/energy', component: Energy },
    { path: '/projects', component: Projects },
    { path: '/books', component: Books }
  ]
})
