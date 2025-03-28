<template>
  <div class="app">
    <!-- <RouterLink to="/main">首页</RouterLink>
    <RouterLink to="/login">登录</RouterLink> -->
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import Home from './views/home/Home.vue'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
}
</style>
