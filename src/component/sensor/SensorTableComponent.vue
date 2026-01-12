<template>
    <div style="width: 80%;">
        <table style="border: 1px solid #000;">
            <thead>
                <tr>
                    <th v-for="header in sensorHeaders" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody v-if="sensors.length > 0">
                <tr v-for="sensor in sensors" :key="sensor.sensor_id" style="border: 1px solid #000; text-align: center;">
                    <td>{{ sensor.sensor_id }}</td>
                    <td>{{ sensor.sensor_nm }}</td>
                    <td>{{ sensor.humidity }}</td>
                    <td>{{ sensor.temperature }}</td>
                    <td>{{ sensor.create_dt }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5" style="text-align: center;">No data</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    sensors: {
        type: Array,
        required: true,
        default: []
    }
});

const sensorHeaders = ref(['Sensor ID', 'Sensor Name', '습도', '온도', '날짜']);
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
</style>