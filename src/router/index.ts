import { LOGIN_TOKEN } from '@/global/constance'
import { localCache } from '@/tools/cache/cache'
import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import('@/views/login/Login.vue')
const Main = () => import('@/views/main/Main.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',

      component: Main,
    },

    {
      path: '/login',
      name: 'login',

      component: Login,
    },
  ],
})
router.beforeEach((to) => {
  const token = localCache.getCache('token')
  console.log('这是路由守卫的token', token)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
