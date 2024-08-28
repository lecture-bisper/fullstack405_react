# 풀스택 405반
## React 수업 자료

---

1. 1일차 수업 ()
   1. nvm 설치하기
   2. react 프로젝트 생성 (console : create-react-app / vite, intellij : create-react-app / vite)
2. 2일차 수업 (es6)
   1. 템플릿 문자열 사용하기
   2. 전개연산자 사용하기
   3. 객체확장표현식 사용하기
   4. 구조분해할당 사용하기
   5. 가변 변수, 불변 변수 (var, let, const의 차이점)
   6. class 사용하기
   7. 화살표 함수 사용하기
3. 3일차 수업 (promiseTest, react1)
   1. 자바스크립트의 비동기 방식 실행
   2. 프로미스를 사용한 비동기 방식 실행
   3. 모듈 사용하기
   4. 배열 함수 forEach, map
   5. 리액트 프로젝트 생성하기
   6. 리액트 컴포넌트 사용하기
4. 4일차 수업 (react2)
   1. JSX 문법
   2. 엘리먼트 렌더링
   3. props란?
   4. 컴포넌트란?
   5. 컴포넌트 합성, 컴포넌트 추출
5. 5일차 수업 (react3)
   1. state란
   2. props와 state의 차이
   3. 컴포넌트의 생명주기와 생명주기 함수
   4. react hooks란, useState 사용하기
6. 6일차 수업 (react4)
   1. useEffect 사용하기
   2. useMemo 사용하기
   3. useRef 사용하기
   4. 커스텀 훅 사용하기
7. 7일차 수업 (react5)
   1. 이벤트 사용하기 (매개변수 사용)
   2. 조건부 렌더링, 엘리먼트 변수, 인라인 조건식, 삼항연산자, 렌더링 막기
   3. 연습문제
   4. 리스트와 키
   5. form 사용하기 (text, textarea, select, checkbox, 문제 풀이)
8. 8일차 수업 (react6)
   1. state 공유하기
   2. 상태 끌어올리기 (자식 컴포넌트의 데이터를 부모 컴포넌트로 전달)
   3. 자식 컴포넌트 호출 시 html 태그 전달하기
   4. 자식 컴포넌트 호출 시 props의 데이터로 다른 컴포넌트 전달하기
   5. 컴포넌트 합성 통합 사용
   6. 기존 사이트를 클론코딩하기
9. 9일차 수업 (react7, RestApiServer, BoardApiServer)
   1. Axios 사용하기
   2. Axios로 영화진흥원 OpenAPI 사용하기
   3. Axios로 스프링부트 RestAPI 사용하기(GET, POST, PUT, DELETE), CORS 오류 해결하기 (리액트 프록시서버, 스프링서버 CrossOrigin, 스프링서버 WebMvcConfigurer 설정)
   4. Axios로 RestAPI 게시판 만들기 (FRONT : 리액트, BACK : 스프링서버)


---

### ※ 참고사항
- IntelliJ 로 리액트 프로젝트 생성 후 사용 시 프로젝트 폴더가 보이지 않는 현상이 발생할 수 있음
- 보통 github에 업로드 후 다운받아 사용 시 해당 현상이 발생함
- IntelliJ 에서 사용하는 프로젝트 파일이 없어서 발생하는 현상임
- '프로젝트명.iml', 'modules.xml' 파일이 없어서 발생하는 현상임
  
** 해결방법 **
- '프로젝트명.iml' 파일을 프로젝트 폴더나 프로젝트 폴더 밖에 생성하고 아래의 코드를 입력
- 프로젝트명은 주로 폴더명과 같으니 폴더명을 사용
```프로젝트명.iml
<?xml version="1.0" encoding="UTF-8"?>
<module type="WEB_MODULE" version="4">
  <component name="NewModuleRootManager" inherit-compiler-output="true">
    <exclude-output />
    <content url="file://$MODULE_DIR$/프로젝트명" />
    <orderEntry type="sourceFolder" forTests="false" />
  </component>
</module>
```
  
- 'modules.xml' 파일을 프로젝트 폴더의 '.idea' 폴더 안에 생성하고 아래의 코드를 입력
- iml 파일의 위치를 원하는 위치로 설정
```modules.xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="ProjectModuleManager">
    <modules>
      <module fileurl="file://$PROJECT_DIR$/../프로젝트명.iml" filepath="$PROJECT_DIR$/../프로젝트명.iml" />
    </modules>
  </component>
</project>
```