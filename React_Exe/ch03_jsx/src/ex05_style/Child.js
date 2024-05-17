function Child() {
    const name = '리액트';

    // camel case
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
    }

    return <div style={style}>{name}</div>;
}

export default Child;