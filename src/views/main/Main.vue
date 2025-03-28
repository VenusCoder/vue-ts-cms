<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <h2>主要</h2>
    <button @click="outLogin">退出登录</button> -->
  </div>
</template>

<script setup lang="ts">
// import router from '@/router'
// import { localCache } from '@/tools/cache/cache'

// function outLogin() {
//   let token = localStorage.getItem('token')
//   localCache.removeCache(token)
//   console.log('11111')
//   router.push('/login')
// }
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      width: 180px;
      height: 100%;
      background-color: #e3f;
    }
  }
  .el-header {
    background-color: #ff44;
  }
  .el-main {
    background-color: #fdfdfd;
  }
}
</style>
