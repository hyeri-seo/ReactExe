function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
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
function Article() {
  // 본문(아티클) 부분
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB <br />
      <a href="/create">Create</a>
    </article>
  );
}

export default function SubApp() {
  return (
    <div>
      {/* ----------헤더 부분---------- */}
      <Header />
      {/* ----------네비게이션 부분---------- */}
      <Nav />
      {/* ----------본문 영역 부분---------- */}
      <Article />
    </div>
  );
}
