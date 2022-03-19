# 대구 서구 카페 정보

## 라이브러리

- react-naver-maps
- react-router-dom
- tailwindcss postcss autoprefixer

## json 데이터 예시

```js
      {data.map((i) => {
        return (
          <div key={i["연번"]}>
            <h4>{i["소재지(도로명)"]}</h4>
          </div>
        );
      })}
```

## 배운것

- html 에 script 로 추가한게 되는것은 javascript 에 window 객체에서 참조할 수 있다.
- create react app 에서는 .env 에 들어있는 환경변수를 index.html 에서도 사용할 수 있다. `%REACT_APP_환경변수이름%` .
- 모바일 브라우저에서는 의도치않게 자꾸 브라우저 자체가 scroll 되는 문제가있다. 그럴땐 body에 fixed 속성을주어서 해결하면된다
- tailwind를 사용할땐 기본 css 와 `@apply` 를 잘활용하면 진짜 편한거같다.