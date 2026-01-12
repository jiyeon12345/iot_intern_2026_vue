<template>
    <SensorTableComponent :sensors="sensors" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SensorTableComponent from '@/component/sensor/SensorTableComponent.vue';
import apiClient from '@/api/axios';

const sensors = ref([]);

onMounted(async () => {
    const response = await apiClient.get('/api/sensors');
    sensors.value = response.data;
});
</script>