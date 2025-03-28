import { localCache } from '@/tools/cache/cache'
import hyRequest from '../../service/index'
import type { Iaccount } from '@/types/index'

export function loginAccountRequest(account: Iaccount) {
  return hyRequest.post({
    url: '/login',
    data: account,
  })
}

export function getUserInfoRequest(id: number) {
  return hyRequest.get({
    url: `/users/${id}`,
    // headers: {
    //   Authorization: localCache.getCache('token'),
    // },
  })
}

export function getUserMenuRequest(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`,
  })
}
