<template>
  <div>
    <button v-if="route.path === '/'" @click="router.push('/sensor')">Sensor</button>
    
    <button v-if="route.path === '/'" @click="router.push('/realtime')">Websocket</button>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
</script>


<style scoped>
  button {
    margin: 10px;
  }
</style>
