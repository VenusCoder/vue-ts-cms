<template>
  <div class="header-content">
    <div class="icons">
      <div @click="handleIconClick">
        <el-icon>
          <component :is="isFold ? 'Expand' : 'Fold'"> </component>
        </el-icon>
      </div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <header-info />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import HeaderInfo from './header-info/HeaderInfo.vue'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])

function handleIconClick() {
  console.log('1111')
  isFold.value = !isFold.value
  console.log(isFold.value)
  emit('foldChange', isFold.value)
}
</script>
<style lang="less" scoped>
:global(.el-header) {
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;

  justify-items: normal;
  justify-content: space-between;
  align-items: center;
  .icons {
    display: flex;
    align-items: center;
  }
  p {
    line-height: 58px;
  }
}
</style>
