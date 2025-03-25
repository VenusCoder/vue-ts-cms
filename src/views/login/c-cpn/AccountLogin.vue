<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="account"
      status-icon
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
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
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

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

//3，执行账号的登录逻辑
function loginAction() {
  console.log('点击登录了', account.name, account.password)
}
//暴露出去
defineExpose({
  loginAction,
})
</script>

<style scoped></style>
