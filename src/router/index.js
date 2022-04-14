import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import Services from '../views/services.vue';
import DevMode from '../views/DevMode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

   {
    path: '/dev',
    name: 'devmode',
    component: DevMode
  },
  
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  {
    path: '/services/:type',
    name: 'services',
    component: Services
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
