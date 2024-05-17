import './Child.css';   // 현재 경로에 있는 Child.css를 가져오겠다

function Child() {
    const name = '리액트';
    
    return <div className="react">{name}</div>;
}

export default Child;