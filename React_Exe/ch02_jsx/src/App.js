import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

/* 
jsx = js + xml
1) 자바스크립트의 확장 문법
2) js 컴포넌트를 html 태그 선언처럼 쉽게 만들 수 있도록 제공하는 문법
3) jsx -> React.createElement로 변환되어 컴포넌트가 된다.
4) return 될 때 반드시 한 개의 태그로 묶여서 반환되어야 함
*/

function App() {
  // return <div>Hello React!</div>

  // 이러면 안 됨
  // return(
  //   <h1>리액트 안녕</h1>
  //   <h2>잘 동작하니?</h2>
  // );

  // 방법1 - div로 묶기
  // return(
  //   <div>
  //     <h1>리액트 안녕</h1>
  //     <h2>잘 동작하니?</h2>
  //   </div>
  // );

  // 방법2 - Fragment로 묶기
  // return(
  //   <Fragment>
  //     <h1>리액트 안녕</h1>
  //     <h2>잘 동작하니?</h2>
  //   </Fragment>
  // );

  // 방법3 - 빈 태그로 묶기
  return(
    <>
      <h1>리액트 안녕</h1>
      <h2>잘 동작하니?</h2>
    </>
  );
}

export default App;
