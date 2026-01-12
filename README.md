vue3 설치

```jsx
npm create vue@3
```

를 하게 되면 아래와 같이 선택할 수 있는 것이 있음.

```jsx
프로젝트 이름 생성

vue-router 선택

vite 선택
```

이렇게만 선택 후 실행하면 폴더에 vue 관련 데이터들이 뜰 것.

---

데이터 몇개 더 추가해야함.

```jsx
package.json에서

dependencies에 "axios": "^1.13.2", 추가!

ex) 
"dependencies": {
    "axios": "^1.13.2",
    "vue": "^3.5.26",
    "vue-router": "^4.6.4"
  },
```

vue install 하기.

```jsx
npm install (package.json 안에 있는 필요한 데이터들 설치하는 과정)
```

이후 vite.config.js 에서 plugins 아래에 입력

```jsx
 server: {
    port: 5173, // 개발 서버 포트 (원하는 포트로 변경 가능)
  },
```

![image.png](attachment:81e56a16-7359-488e-884a-a8c942f7c434:image.png)

vue 실행 방법

```jsx
npm run dev -> (package.json 안의 scripts 에 dev 실행)
```

---

이후 

src 폴더 아래에

view, component 폴더 만들기.

- view : 실제 화면에 보이는 파일
- component : 화면 안에 각 기능 별 상세 파일