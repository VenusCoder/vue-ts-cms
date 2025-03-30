<template>
  <div class="main">
    <span v-show="!isFold"><img src="../../assets/img/logo.png" alt="" />后台管理系统</span>
    <div class="menu">
      <el-menu :collapse="isFold" default-active="2" class="el-menu-vertical-demo">
        <el-sub-menu :index="item.id + ''" v-for="item in userMenu" :key="item.id">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            :index="subitem.id + ''"
            v-for="subitem in item.children"
            :key="subitem.id"
            @click="handleMenuRouter(subitem)"
            >{{ subitem.name }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import useLoginStore from '@/stores/login/login'
// import router from '@/router'
import { useRouter } from 'vue-router'

// 0.定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
})

const loginStore = useLoginStore()
const userMenu = loginStore.userMenu.data
console.log(userMenu, 'hhhh ')
const router = useRouter()

function handleMenuRouter(item: any) {
  console.log('itemkkkk', item.url)

  const url = item.url

  router.push(url)
}
</script>

<style lang="less" scoped>
.main {
  span {
    font-size: 16px;
    line-height: 57px;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
