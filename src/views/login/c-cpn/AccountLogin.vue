<template>
  <div>
    <el-form
      
      :model="account"
      status-icon
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules,ElForm, } from 'element-plus'

import { ElMessage } from 'element-plus'
import {loginAccountRequest} from'../../../service/login/login'
import useLoginStore from '@/stores/login/login'




const formRef=ref<IntanceType<typeof ElForm>>()

interface RuleForm {
  name: string
  password: number
}

const account = reactive({
  name: '',
  password: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 8, message: '用户名字不少于3个字母,不超过8个字母', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码长度不少于6个字母+数字,不超过10个字母', trigger: 'blur' },
  ],
})


let loginStore=useLoginStore()
//3，执行账号的登录逻辑
function loginAction() {
  console.log('点击登录了', account.name, account.password)
  formRef.value.validate((valid)=>{
    if(valid){
      const name =account.name
      const password =account.password

      loginStore.loginAccountActions({name, password})


      loginAccountRequest({name,password}).then(res=>console.log(res))
      console.log('验证成功')
    }else{
      console.log('验证失败')
      ElMessage.error('Oops, 请您输入正确的格式再登录')
    }
  })
}




//暴露出去
defineExpose({
  loginAction,
})
</script>

<style scoped></style>
