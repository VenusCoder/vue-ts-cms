import axios from 'axios'

import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

//只有对应的实例才有拦截器，不是全局拦截器
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //从config中取出的拦截器是对应的实例传过来的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    ) //别人传过来的拦截器放到实例拦截器里面

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    //给所有的实例添加拦截器：全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('给全局添加请求拦截器')
        return config
      },
      (err) => {
        return err
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('给全局添加响应拦截器')
        return res
      },
      (err) => {
        return err
      },
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET',
    })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default HYRequest
