import { defineStore } from 'pinia'
import { loginAccountRequest, getUserInfoRequest, getUserMenuRequest } from '@/service/login/login'
import type { Iaccount } from '@/types'
import router from '@/router/index'
import { localCache } from '@/tools/cache/cache'
import { mapMenuRoute } from '@/tools/map-menu'
interface IuserInfo {
  token: string
  userInfo: any
  userMenu: any
}

let useLoginStore = defineStore('login', {
  state: (): IuserInfo => ({
    token: '',
    userInfo: {},
    userMenu: [],
  }),
  actions: {
    async loginAccountActions(account: Iaccount) {
      let loginResult: any = await loginAccountRequest(account)

      let loginResults = loginResult.data.data

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

      //获取用户的角色权限（菜单menus）
      let usermenuresult: any = await getUserMenuRequest(this.userInfo.role.id)
      console.log(usermenuresult.data, '10000')
      this.userMenu = usermenuresult.data
      //这里有可能出错， 因为this.userMenu.data的data之前没加，是后来加的
      const userMenu = this.userMenu.data

      //保存用户userinfo本地缓存,注意token不能在这里缓存本地，因为获取role信息请求
      // 的id需要在携带token传进去

      // localCache.setCache('token', this.token)
      // console.log(555555, this.token)

      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenu', userMenu)
      //动态添加路由
      const routes = mapMenuRoute(userMenu)
      console.log(routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      router.push('/main')
    },

    loadLocalCacheActions() {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenu = localCache.getCache('userMenu')
      if (token && userInfo && userMenu) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenu
        console.log(this.token, '111111111111111,打印不到token')

        //动态添加路由
        const routes = mapMenuRoute(userMenu)
        console.log(routes)
        routes.forEach((route) => router.addRoute('main', route))
      }
    },
  },
})

export default useLoginStore
