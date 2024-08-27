// Exercise.jsx

import { useState } from "react";
import {Button} from "react-bootstrap";
import Ex1 from "./Ex1.jsx";
import Ex2 from "./Ex2.jsx";
import Ex3 from "./Ex3.jsx";

{/* 문제 1) https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm 의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}
{/* 예제 사이트의 내용을 각각의 컴포넌트로 생성하고 화면에 들어가는 이미지 및 텍스트를 배열에 입력하여 map() 함수를 사용하여 컴포넌트를 출력하는 방식으로 생성 */}

{/* 문제 2) https://www.w3schools.com/w3css/tryw3css_examples_pricing_tables.htm 의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}

{/* 문제 3) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm 의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}
{/* header, main 부분으로 화면을 나누어서 표현 */}
{/* about, menu, contact, 네비게이션바, footer 부분으로 컴포넌트를 나누어서 사용 */}

function Exercise() {
  const [viewEx1, setViewEx1] = useState(true);
  const [viewEx2, setViewEx2] = useState(false);
  const [viewEx3, setViewEx3] = useState(false);

  const btn1Click = () => {
    setViewEx1(true);
    setViewEx2(false);
    setViewEx3(false);
  }

  const btn2Click = () => {
    setViewEx1(false);
    setViewEx2(true);
    setViewEx3(false);
  }

  const btn3Click = () => {
    setViewEx1(false);
    setViewEx2(false);
    setViewEx3(true);
  }

  let view = <Ex1 />;

  if (viewEx1 == true) {
    view = <Ex1 />;
  }
  else if (viewEx2 == true) {
    view = <Ex2 />;
  }
  else if (viewEx3){
    view = <Ex3 />;
  }

  return (
    <div className={'container mt-4'}>
      <div className={'btn-group'}>
        <button type={'button'} className={'btn btn-primary'} onClick={btn1Click}>문제 1</button>
        <Button type={'button'} variant={'success'} onClick={btn2Click}>문제 2</Button>
        <Button type={'button'} variant={'info'} onClick={btn3Click}>문제 3</Button>
      </div>
      <hr/>
      <div>
        {view}
      </div>
    </div>
  );
}

export default Exercise;













