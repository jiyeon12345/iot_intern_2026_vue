const startWebSocket = wsUrl => {
    let url;
    
    // wsUrl이 이미 ws:// 또는 wss://로 시작하는 경우 그대로 사용
    if (wsUrl && (wsUrl.startsWith('ws://') || wsUrl.startsWith('wss://'))) {
        url = wsUrl;
    } else {
        // API base URL에서 호스트와 포트 추출
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
        const apiUrl = new URL(apiBaseUrl);
        const protocol = apiUrl.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = apiUrl.host; // hostname:port
        
        // wsUrl이 제공된 경우 경로로 사용, 없으면 기본 경로 사용
        const path = wsUrl || '/ws/sensor/realtime';
        // 경로가 /로 시작하지 않으면 추가
        const wsPath = path.startsWith('/') ? path : `/${path}`;
        
        url = `${protocol}//${host}${wsPath}`;
    }
    
    console.log('WebSocket connecting to:', url);
    const websocket = new WebSocket(url);
  
    websocket.onopen = () => {
      console.log('WebSocket Open');
    };
  
    websocket.onclose = event => {
      if (event.wasClean) {
        console.log(`[close] 커넥션이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`);
      } else {
        console.log('[close] 커넥션이 죽었습니다.');
      }
    };
  
    websocket.onerror = e => {
      console.log('WebSocket Error', e);
    };
  
    return websocket;
  };
  
  export { startWebSocket };
  