import { createRouter, createWebHistory } from 'vue-router'
const Login=()=> import('@/views/login/Login.vue')
const Home=()=>import('@/views/home/Home.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/login',
      name: 'login',
   
      component: Login,
    },
  ],
})

export default router
