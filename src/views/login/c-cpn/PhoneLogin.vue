<template>
    <div>
        *手机号<el-input v-model="input" placeholder="Please input" />
      *验证码<el-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
    </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')

</script>

<style scoped>

</style>