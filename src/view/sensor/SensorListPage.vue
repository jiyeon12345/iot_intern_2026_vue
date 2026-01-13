<template>
    <div>
        <button @click="goHome()">Go Home</button>
    </div>
    <SensorTableComponent :sensors="sensors" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SensorTableComponent from '@/component/sensor/SensorTableComponent.vue';
import apiClient from '@/api/axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const sensors = ref([]);

onMounted(async () => {
    const response = await apiClient.get('/api/sensors');
    sensors.value = response.data;
});

const goHome = () => {
  router.push('/');
};

</script>

<style scoped>
button {
    margin: 10px;
}
</style>