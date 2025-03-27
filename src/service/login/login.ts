import hyRequest from '../../service/index'
import type { IAccount } from '@/types/index'

export function loginAccountRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account,
  })
}
