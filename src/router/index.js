import { createRouter, createWebHistory } from 'vue-router'
import SensorListPage from '../view/sensor/SensorListPage.vue'
import ReceiveRealTimeMessagePage from '../view/realtime/ReceiveRealTimeMessagePage.vue'

const routes = [
  { path: '/sensor', component: SensorListPage },
  { path: '/realtime', component: ReceiveRealTimeMessagePage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
