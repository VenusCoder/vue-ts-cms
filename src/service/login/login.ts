import hyRequest from '../../service/index'
export function loginAccountRequest(account:any) {
    return hyRequest.post({
        url:'/login',
        data:account
    })
    
}