<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '200px'">
        <main-menu :is-fold="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header>
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- <h2>主要</h2>
    <button @click="outLogin">退出登录</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '../../components/mian-menu/MainMenu.vue'
import MainHeader from '../../components/main-header/MainHeader.vue'

const isFold = ref(false)

function handleFoldChange(flag: boolean) {
  isFold.value = flag
  console.log(isFold.value)
}

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
      background-color: #fffff3;
      transition: width 0.4s ease;
    }
  }
  .main-content {
    height: 100%;
  }
  .el-header {
    background-color: #ff44;
  }
  .el-main {
    background-color: #fdfdfd;
  }
}
</style>
