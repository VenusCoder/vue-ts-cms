<template>
  <div class="main">
    <span v-show="!isFold"><img src="../../assets/img/logo.png" alt="" />后台管理系统</span>
    <div class="menu">
      <el-menu :collapse="isFold" :default-active="defaultActive" class="el-menu-vertical-demo">
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
import useLoginStore from '../../stores/login/login'
// import router from '@/router'
import { useRouter,useRoute } from 'vue-router'
import { localCache } from '@/tools/cache/cache'
import { firstMenu, mapPathToMenu} from '@/tools/map-menu'


// 0.定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
})

const loginStore = useLoginStore()
//添加动态路由的时候，这里容易出错，因为userMenu信息容易丢失，或者.data写错了

const userMenu = loginStore.userMenu

console.log(loginStore.userMenu, 'hhhh ')
const router = useRouter()

function handleMenuRouter(item: any) {
  console.log('itemkkkk', item.url)

  const url = item.url

  router.push(url)
}

const route=useRoute()
const pathMenu=mapPathToMenu(route.path,userMenu)

const defaultActive=ref(pathMenu.id+'')

console.log(route.path)


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
