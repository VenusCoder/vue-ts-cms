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

        <!-- 手机登录组件 -->
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

    <!-- 记住密码和忘记密码 -->

    <div class="passworld">
      <el-checkbox v-model="rempsw" label="记住密码" size="large" />
      <el-link href="https://element-plus.org" target="_blank"> 忘记密码 </el-link>
    </div>

    <!-- 立即登录 -->
    <el-button class="bt-sz" type="primary" size="large" @click="handleClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref,watch} from 'vue'

import type { TabsPaneContext } from 'element-plus'
import AccountLogin from './AccountLogin.vue'
import PhoneLogin from './PhoneLogin.vue'
import {localCache} from"@/tools/cache/cache"


const activeName = ref('account')
const accountRef = ref('')

const rempsw = ref<boolean>(localCache.getCache('rempsw')??false)
const input = ref<InstanceType<typeof AccountLogin>>()


  //记录记住密码按钮的状态是true or false
watch(rempsw, (newValue)=>{
  localCache.setCache('rempsw',newValue)
})


  //点击登录按钮的方法
function handleClick() {
  //1，获取子组件实力

  //2，调用子组件方法，获取到子组件的账号和密码
  accountRef.value?.loginAction(rempsw.value)

  // if(rempsw.value){
  //   console.log('记住账号和密码', rempsw.value)
  // }



  if (activeName.value === 'account') {
    if(rempsw.value){
      console.log('使用账号密码登录')
    }
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
