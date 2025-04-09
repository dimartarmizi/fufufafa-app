import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'
import Random from '../pages/Random.vue'
import About from '../pages/About.vue'
import Disclaimer from '../pages/Disclaimer.vue'
import Credit from '../pages/Credit.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/detail/:id', name: 'Detail', component: Detail },
  { path: '/random', name: 'Random', component: Random },
  { path: '/about', name: 'About', component: About },
  { path: '/disclaimer', name: 'Disclaimer', component: Disclaimer },
  { path: '/credit', name: 'Credit', component: Credit },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
