<template>
  <div class="login">
    <div>
      <child-login />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChildLogin from './c-cpn/ChildLogin.vue'
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;

  align-items: center; /* 垂直居中 */

  background-color: #ef3ee4;
}
</style>
