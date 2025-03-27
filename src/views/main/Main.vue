<template>
  <div>
  <h2>主要</h2>
  <button @click="outLogin">退出登录</button>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router';
  import {localCache}from '@/tools/cache/cache'
 

  function outLogin(){
    let token= localStorage.getItem('token')
    localCache.removeCache(token)
    console.log('11111')
    router.push('/login')
    
  }
 

</script>

<style>

</style>