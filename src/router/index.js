import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Playground from '@/components/PlayGround.vue'
import InputData from '@/components/InputData.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground,

    },
    {
      path: '/input',
      name: 'Input',
      component: InputData,

    },
  ]
})

export default router
