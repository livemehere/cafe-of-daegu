# 대구 서구 카페 정보

[데모](https://livemehere.github.io/cafe-of-daegu/)

## 라이브러리

- 네이버 클라우드 플랫폼 : 네이버지도 API
- react-router-dom
- tailwindcss postcss autoprefixer

## 배운것

- html 에 script 로 추가한게 되는것은 javascript 에 window 객체에서 참조할 수 있다.
- create react app 에서는 .env 에 들어있는 환경변수를 index.html 에서도 사용할 수 있다. `%REACT_APP_환경변수이름%` .
- 모바일 브라우저에서는 의도치않게 자꾸 브라우저 자체가 scroll 되는 문제가있다. 그럴땐 body에 fixed 속성을주어서 해결하면된다
- tailwind를 사용할땐 기본 css 와 `@apply` 를 잘활용하면 진짜 편한거같다.
- scroll 하는 와중에 고정시키고 싶은게있다면, sticky 활용하기
- github pages 로 배포할때는 항상, 레포지토리 이름이 루트 url이 되야한다
  - '/' 이 아니라 '/cafe-of-dagu' 로 대체해줘야한다.
