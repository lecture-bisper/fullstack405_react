import {useState} from "react";
import Greeting from "./Greeting.jsx";

// 자식 컴포넌트
function LoginButton(props) {
  return (
    // 부모가 전달해준 데이터의 이름이 onClick 이고 실제로 전달된 데이터는 함수임
    // 사용 시 props.onClick 라는 형태로 사용
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
  );
}

// 자식 컴포넌트
function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>
  );
}

// 부모 컴포넌트
function LoginControl() {
  // useState를 사용하여 변수 isLoggedIn 를 state로 관리, 초기값을 false로 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  // 이벤트 처리 함수 선언
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 엘리먼트 변수로 사용할 변수 선언, 실제로는 일반적인 자바스크립트 변수
  // 엘리먼트 변수 : 일반 자바스크립트 변수에 저장된 내용이 JSX 문법으로 만들어진 컴포넌트인 변수
  let button;

  // 조건부 렌더링 연산, state로 관리되는 isLoggedIn 변수의 값이 true/false 에 따라서 저장되는 컴포넌트를 변경
  if (isLoggedIn == true) {
    // LoginButton, LogoutButton 컴포넌트에 전달할 데이터의 이름으로 onClick 를 사용
    // onClick 이라는 이름으로 handleLogoutClick(), handleLoginClick() 함수를 자식 컴포넌트에 전달함
    button = <LogoutButton onClick={handleLogoutClick} />;
  }
  else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  // 엘리먼트 변수 사용 시
  return (
    <div className={'mt-4'}>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 실제 화면에 엘리먼트 변수를 출력 */}
      {/* 현재 엘리먼트 변수가 가지고 있는 컴포넌트를 출력 */}
      {button}
    </div>
  );

  // 엘리먼트 변수를 사용하지 않고 직접 자식 컴포넌트를 호출 시
  // if (isLoggedIn) {
  //   return (
  //     <div className={'mt-4'}>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LogoutButton onClick={handleLogoutClick} />
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div className={'mt-4'}>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LoginButton onClick={handleLoginClick} />
  //     </div>
  //   )
  // }
}

export default LoginControl;












