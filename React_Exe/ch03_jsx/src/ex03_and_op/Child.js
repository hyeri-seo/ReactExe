function Child() {
    const name = "리액트";
    return (
        <>
            {/* 조건에 맞는 것만 return하고 싶을 때 */}
            {name==="리액트" && <h1>리액트입니다.</h1>}
        </>
    );
}

export default Child;