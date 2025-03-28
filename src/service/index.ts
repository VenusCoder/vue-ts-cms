import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import { localCache } from '@/tools/cache/cache'

let hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (config.headers && token) {
        config.headers.Authorization = token
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')

      return err
    },
    responseInterceptor: (config) => {
      console.log('响应成功的拦截')

      return config
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')

      return err
    },
  },
})

// 可以创建多个请求地址
// let hyRequest2= new HYRequest({
//     base_url=''
// })

export default hyRequest
