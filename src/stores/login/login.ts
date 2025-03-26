import {defineStore} from 'pinia'
import { loginAccountRequest } from '@/service/login/login'
import type { Iaccount } from '@/types';

let useLoginStore =defineStore('login',{
    state:()=>({
        id:'',
        token:'',
        name:'',

    }),
    actions:{
        loginAccountActions(account:Iaccount){
             let loginResult=loginAccountRequest(account)
             this.id=loginResult.id
this.token=loginResult.token
            this.name=loginResult.name


            
        }
    }
})

export default useLoginStore