<template>
  <div class="child">
    <h2>后台管理系统</h2>
    <!-- tbs -->
    <div>
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span class="text">账号登录</span>
            </span>
          </template>
          <account-login ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </span>
          </template>

          <phone-login></phone-login>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="passworld">
      <el-checkbox v-model="checked1" label="记住密码" size="large" />
      <el-link href="https://element-plus.org" target="_blank"> 忘记密码 </el-link>
    </div>
    <el-button class="bt-sz" type="primary" size="large" @click="handleClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'
import AccountLogin from './AccountLogin.vue'
import PhoneLogin from './PhoneLogin.vue'

const activeName = ref('account')
const accountRef = ref('')

const checked1 = ref(true)
const input = ref<InstanceType<typeof AccountLogin>>()

function handleClick() {
  //1，获取子组件实力

  //2，调用子组件方法
  accountRef.value.loginAction()
  console.log('kkkkkk')
  if (activeName.value === 'account') {
    console.log('使用账户登录')
  } else {
    console.log('使用手机登录')
  }
}
</script>

<style scoped>
.child {
  width: 400px;
  height: 300px;
  margin: 20px;
  /* border: 1px solid #eee; */
}
.child h2 {
  text-align: center;
  margin-bottom: 10px;
}

.bt-sz {
  width: 100%;
  --el-button-size: 30px;
}
.text {
  margin-left: 10px;
}
.passworld {
  display: flex;
  justify-content: space-between;
}
</style>
