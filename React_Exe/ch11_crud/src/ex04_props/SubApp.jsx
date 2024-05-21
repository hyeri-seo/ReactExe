// 부모가 자식 컴포넌트에 값을 전달할 대는 props를 사용함
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav() {
  // 네비게이션 부분
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
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
  return (
    <div>
      {/* ----------헤더 부분---------- */}
      <Header title="REACT" />
      {/* ----------네비게이션 부분---------- */}
      <Nav />
      {/* ----------본문 영역 부분---------- */}
      <Article title="Welcome" body="Hello, Web" />
      <Article title="Hi" body="Hello, React" />
    </div>
  );
}
