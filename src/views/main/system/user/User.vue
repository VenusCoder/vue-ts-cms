<template>
  <div class="user">
    <div class="search">
      <UserChild />
    </div>
    <div class="excel"></div>
    <div class="pagenext"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import UserChild from './userchild/UserChild.vue'
</script>
<style lang="less" scoped></style>
