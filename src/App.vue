

<template>
  

    <div class="wrapper">
      

     
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/login">登录</RouterLink>
      <RouterView />
    </div>
  
 

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import Home from './views/home/Home.vue'
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
}
</style>
