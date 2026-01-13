<template>
    <div>
        <div style="display: flex; flex-direction: column; align-items: center; width: 50%;">
            <p>Temperature : {{ temperature }}</p>
            <!-- 온도에 따른 색 변화 (5°C 이하 : 빨강, 35°C 이상 : 초록, 나머지 : 주황) -->
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" :fill="temperature <= 5 ? 'red' : temperature > 5 && temperature <= 35 ? 'orange' : 'green'">
                <path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"/>
            </svg>
        </div>
        
        <div style="display: flex; flex-direction: column; align-items: center; width: 50%;">
            <p>Humidity : {{ humidity }}</p>
            <!-- 습도에 따른 색 변화 (70% 이상 : 빨강, 50% 이상 : 주황, 30% 이상 : 노랑, 30% 이하 : 초록) -->
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" :fill="humidity > 70 ? 'red' : humidity > 50 && humidity <= 70 ? 'orange' : humidity > 30 && humidity <= 50 ? 'yellow' : 'green'">
                <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100ZM240-416h480q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416Z"/>
            </svg>
        </div>

        <div>
            <button @click="goHome()">Go Home</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { startWebSocket } from '@/component/common/websocket';
import { useRouter } from 'vue-router';

const router = useRouter();
const temperature = ref(0);
const humidity = ref(0);

let websocket;
onMounted(() => {
  const wsPath = import.meta.env.VITE_WS_BASE_URL;
  websocket = startWebSocket(wsPath);

  if (websocket && websocket instanceof WebSocket) {
    websocket.onmessage = (event) => {
      console.log('Receive WebSocket Message : ', event.data);
      changeData(event.data);
    };
  } else {
    console.error('WebSocket 객체를 생성할 수 없습니다.');
  }
});

const close = () => {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    websocket.close();
  }
};

const changeData = data => {
  const jsonData = JSON.parse(data);

  temperature.value = jsonData.temperature;
  humidity.value = jsonData.humidity;
};

const goHome = () => {
  router.push('/');
};

onBeforeUnmount(() => {
  close();
});
</script>