import axios from 'axios';

// axios 인스턴스 생성
// baseURL은 .env 파일의 VITE_API_BASE_URL 환경 변수에서 가져옵니다
// .env 파일이 없거나 변수가 없으면 기본값 http://localhost:8080 사용
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  timeout: 10000, // 10초
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리
    if (error.response) {
      // 서버가 응답했지만 에러 상태 코드
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못함
      console.error('Network Error:', error.request);
    } else {
      // 요청 설정 중 에러
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

