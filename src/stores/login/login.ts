import {defineStore} from 'pinia'
import { loginAccountRequest } from '@/service/login/login'

let useLoginStore =defineStore('login',{
    state:()=>({
        id:'',
        token:'',
        name:'',

    }),
    actions:{
        loginAccountActions(account:any){
             let loginResult=loginAccountRequest(account)
             this.id=loginResult.id
this.token=loginResult.token
            this.name=loginResult.name


            
        }
    }
})

export default useLoginStore