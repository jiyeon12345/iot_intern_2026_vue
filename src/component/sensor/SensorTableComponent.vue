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
                <td :colspan="sensorHeaders.length" class="no-data">
                    조회된 센서 데이터가 없습니다.
                </td>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

/** * @description 센서 목록 테이블 컴포넌트
 * @property {Array} sensors - 부모로부터 전달받은 센서 데이터 배열
 */
const props = defineProps({
    sensors: {
        type: Array,
        // [필수값 설정] true일 경우 부모 컴포넌트에서 반드시 이 값을 전달해야 함.
        required: true,
        // [방어 코드] 만약 부모로부터 데이터가 오지 않거나 빈 값이 올 경우를 대비.
        // (required가 true이면 default는 의미가 없지만, 방어코드로 좋음)
        default: () => [] 
    }
    // sensors : Array, // 단순 타입 선언 시 사용
});

const sensorHeaders = ref(['Sensor ID', 'Sensor Name', '습도', '온도', '날짜']);
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
</style>