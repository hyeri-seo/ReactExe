import './Child.css';   // 현재 경로에 있는 Child.css를 가져오겠다

function Child() {
    const name = '리액트';

    // js 주석은 이렇게 작성합니다
    /* js 여러 줄 주석
    */
    
    return <>
        {/* 주석은 이렇게 작성합니다 */}
        <div className="react">{name}
            {name}
        </div>
    </>;
}

export default Child;