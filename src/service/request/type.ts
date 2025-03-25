import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//别人传过来的拦截：添加拦截器到类里面
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (err: any) => any

  responseInterceptor: (res: T) => T
  responseInterceptorCatch: (err: any) => any
}

//自己的配置继承自AxiosRequestConfig
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
}
