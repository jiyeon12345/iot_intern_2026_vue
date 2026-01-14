<template>
    <SensorTableComponent :sensors="sensors" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SensorTableComponent from '@/component/sensor/SensorTableComponent.vue';
import apiClient from '@/api/axios';

// 센서 데이터 상태 관리
const sensors = ref([]);

/**
 * [Lifecycle] 컴포넌트 마운트 시 데이터 로드
 */
onMounted(() => {
    getSensorList();
});

/**
 * [API 호출] 센서 목록 조회
 */
const getSensorList = async () => {
  try {
    const response = await apiClient.get('/api/sensors');
    sensors.value = response.data;
  } catch (error) {
    console.error("센서 목록을 가져오는 중 오류 발생:", error);
    alert("데이터를 불러오지 못했습니다.");
  }
};

/* -------------------------------------------------------------------------- */
/* [참고] Python 예외 처리 구조 (try-except-else-finally)
/* -------------------------------------------------------------------------- */
/*
  try:
      # [실행] 에러가 발생할 가능성이 있는 코드
      response = requests.get('https://api.sensors.com/data')
      sensors = response.json()
  except Exception as e:
      # [예외] 에러 발생 시 처리 (JS의 catch)
      print(f"오류 발생: {e}")
  else:
      # [성공] 에러 없이 try 블록이 완료되었을 때만 실행
      print("데이터 로드 성공")
  finally:
      # [종료] 성공/실패 여부와 상관없이 무조건 실행
      print("연결 종료")
*/
</script>