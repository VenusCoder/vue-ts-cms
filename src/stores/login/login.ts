import { defineStore } from 'pinia'
import { loginAccountRequest, getUserInfoRequest, getUserMenuRequest } from '@/service/login/login'
import type { Iaccount } from '@/types'
import router from '@/router/index'
import { localCache } from '@/tools/cache/cache'
import type { RouteRecordRaw } from 'vue-router'

interface IuserInfo {
  token: string
  userInfo: any
  userMenu: any
}

let useLoginStore = defineStore('login', {
  state: (): IuserInfo => ({
    token: localCache.getCache('token') ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenu: localCache.getCache('userMenu') ?? [],
  }),
  actions: {
    async loginAccountActions(account: Iaccount) {
      let loginResult: any = await loginAccountRequest(account)

      let loginResults = loginResult.data.data

      console.log('222222', loginResults)

      const id = loginResults.id
      const name = loginResults.name
      this.token = loginResults.token

      localCache.setCache('token', this.token)
      // console.log(555555, this.token)

      //获取用户的详情信息，在点击马上登陆跳转到页面之前，就要发送请求获取到用户的code权限等信息
      let userinforesult: any = await getUserInfoRequest(id)
      console.log('66666', userinforesult.data.data.id)
      this.userInfo = userinforesult.data.data
      const userInfo = this.userInfo
      console.log(this.userInfo.role, '9999')

      //获取用户的角色权限（菜单menus）
      let usermenuresult: any = await getUserMenuRequest(this.userInfo.role.id)
      console.log(usermenuresult.data, '10000')
      this.userMenu = usermenuresult.data
      //这里有可能出错， 因为this.userMenu.data的data之前没加，是后来加的
      const userMenu = this.userMenu.data
            console.log(userMenu, 'userMenu')


      //动态添加路由:
      //需要注意的是，RouteRecordRaw 只是一个类型定义，它并不会自动注册路由。
      // 要将其注册到 Vue Router 中，还需要使用 createRouter 函数创建路由实例，
      // 并将路由记录传递给该实例的 routes 属性：
      const localRoutes: RouteRecordRaw[] = []
      const files: Record<string, any> = import.meta.glob('../../router/main/**/*.ts', {
        eager: true,
      })
      console.log(files, '0000')

      for (let key in files) {
        let module = files[key]
        localRoutes.push(module.default)
        console.log(module.default, '77777')
      }

      for(let menu of userMenu){
        for(let submenu of menu.children){
          const route=localRoutes.find((item)=>item.path===submenu.url)
        if(route)   router.addRoute('main',route)
          
        }
      }

      //保存用户userinfo本地缓存,注意token不能在这里缓存本地，因为获取role信息请求的id需要在携带token传进去

      // localCache.setCache('token', this.token)
      // console.log(555555, this.token)

      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenu', userMenu)

      router.push('/main')
    },

  },
})

export default useLoginStore
