function Header() {
  // 헤더 부분
}
function Nav() {
  // 네비게이션 부분
}
function Article() {
  // 본문(아티클) 부분
}

export default function SubApp() {
  return (
    <div>
      {/* ----------헤더 부분---------- */}
      <header>
        <h1>
          <a href="/">WEB</a>
        </h1>
      </header>
      {/* ----------네비게이션 부분---------- */}
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
      {/* ----------본문 영역 부분---------- */}
      <article>
        <h2>Welcome</h2>
        Hello, WEB <br />
        <a href="/create">Create</a>
      </article>
    </div>
  );
}
