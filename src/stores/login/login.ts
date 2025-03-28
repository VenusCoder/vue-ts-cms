import { defineStore } from 'pinia'
import { loginAccountRequest, getUserInfoRequest, getUserMenuRequest } from '@/service/login/login'
import type { Iaccount } from '@/types'
import router from '@/router/index'
import { localCache } from '@/tools/cache/cache'

interface IuserInfo {
  token: string
  userInfo: any
  userMenu: any
}

let useLoginStore = defineStore('login', {
  state: (): IuserInfo => ({
    token: localCache.getCache('token') ?? '',
    userInfo: {},
    userMenu: [],
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
      console.log(555555, this.token)
      //在点击马上登陆跳转到页面之前，就要发送请求获取到用户的code权限等信息
      let userinforesult: any = await getUserInfoRequest(id)
      console.log('66666', userinforesult.data.data.id)

      this.userInfo = userinforesult.data.data
      console.log(this.userInfo.role.id, '9999')
      let usermenuresult: any = await getUserMenuRequest(this.userInfo.role.id)
      console.log(usermenuresult.data, '10000')
      this.userMenu = usermenuresult.data

      router.push('/main')
    },
  },
})

export default useLoginStore
