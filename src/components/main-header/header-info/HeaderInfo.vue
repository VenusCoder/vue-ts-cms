<template>
  <div class="info">
    <div>
      <el-icon><Promotion /></el-icon>
      <el-icon><TrendCharts /></el-icon>
      <el-icon><BellFilled /></el-icon>
    </div>
    <div>
      <span>
        <el-avatar
          :size="20"
          src="https://iknow-pic.cdn.bcebos.com/a71ea8d3fd1f4134679182fe371f95cad0c85e88"
        />
      </span>
      <el-dropdown>
        <span class="el-dropdown-link">
          个人信息
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">
              <el-icon><RemoveFilled /></el-icon> 退出登录</el-dropdown-item
            >
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><EditPen /></el-icon>
              修改密码</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { localCache } from '@/tools/cache/cache'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function loginOut() {
  localCache.removeCache('token')
  router.push('/login')
}
</script>
<style lang="less" scoped>
.info {
  display: flex;
  align-items: center;
  margin-left: 700px;
}
</style>
