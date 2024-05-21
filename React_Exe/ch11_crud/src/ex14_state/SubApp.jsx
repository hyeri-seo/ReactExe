import { useState } from "react";

// 부모가 자식 컴포넌트에 값을 전달할 대는 props를 사용함
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 원래 <a>의 기본 기능을 막음
            props.onChangeMode(); // onChangeMode에 전달된 함수가 호출됨
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]; // 부모로부터 전달된객체를 한 개씩 추출
    // onChangeMode에 어떤 list가 호출되었는지 전달하기 위해 '사용자 정의 속성'인 id를 저장함
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault(); // <a>태그의 기본 동작 막기
            props.onChangeMode(event.target.id); // props내의 onChangeMode에 전달된 함수 호출
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  // 본문(아티클) 부분
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default function SubApp() {
  // let mode = "WELCOME"; // 요소 클릭 시 변경할 값
  const [mode, setMode] = useState("WELCOME"); // 요소 클릭 시 변경할 값 + 상태 저장 + 렌더링
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  // html 요소 클릭 시 mode에 저장된 값에 따라서 content가 바뀌어서 보여짐
  let content = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    content = <Article title="Welcome" body="Hello, Read"></Article>;
  }

  return (
    <div>
      {/* onChangeMode는 원래 html 요소의 이벤트가 아니라
      '사용자 정의 이벤트'이다. */}
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      {/* Nav 내의 list들 중에 누가 이벤트를 전달했는가를 
      구분하기 위해 id를 매개변수로 받음 */}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
        }}
      />
      {/* <Article title="Welcome" body="Hello, Web" /> */}
      {content}
    </div>
  );
}
