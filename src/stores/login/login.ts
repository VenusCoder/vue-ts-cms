import {defineStore} from 'pinia'
import { loginAccountRequest } from '@/service/login/login'
import type { Iaccount } from '@/types';
import router from"@/router/index"
import {localCache} from"@/tools/cache/cache"

let useLoginStore =defineStore('login',{
    state:()=>({
        id:'',
        token:localCache.getCache('token')??'',
        name:'',

    }),
    actions:{
       async loginAccountActions(account:Iaccount){
            
        
  let loginResult= await loginAccountRequest(account)

  let loginResults=loginResult.data.data

    console.log('222222',loginResults)

             this.id=loginResults.id
           this.token=loginResults.token
            this.name=loginResults.name
            localCache.setCache('token',this.token)

            router.push('/main')


            
        }
    }
})

export default useLoginStore