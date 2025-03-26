import hyRequest from '../../service/index'
import { Iaccount } from '@/types'


export function loginAccountRequest(account:Iaccount) {
    return hyRequest.post({
        url:'/login',
        data:account
    })
    
}