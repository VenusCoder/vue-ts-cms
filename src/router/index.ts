import { createRouter, createWebHistory } from 'vue-router'
const Login=()=> import('@/views/login/Login.vue')
const Home=()=>import('@/views/home/Home.vue')
const Main=()=>import('@/views/main/Main.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'main',
   
      component: Main,
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
router.beforeEach((to)=>{
  const token=localStorage.getItem('token')
  if(to.path==="/main" && !token){
    return '/login'
  }

})

export default router
