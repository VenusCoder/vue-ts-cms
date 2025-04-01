<template>
    <div class="bread">
        <el-breadcrumb separator-icon="ArrowRight">
            <template v-for="item in bread" :key="item.name">
                <el-breadcrumb-item :to="item.path">{{item.name}}</el-breadcrumb-item>

            </template>
       
        
      </el-breadcrumb>
    </div>
  
</template>

<script setup lang="ts">
import {mapPathToBread}from '@/tools/map-menu'
import useLoginStore from "@/stores/login/login"
import {useRoute} from "vue-router"

const route=useRoute()
const userMenu=useLoginStore().userMenu
const bread=mapPathToBread(route.path,userMenu)


</script>

<style lang="less" scoped>

</style>