import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }

    render() {
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>   
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                {/* 1씩 2번 증가 */}
                <button onClick={() => {
                    this.setState(prevState => {
                        return {
                            number : prevState.number + 1
                        };
                    });
                    this.setState(prevState => ({
                       number : prevState.number + 1
                    }));
                }}>
                +1
                </button>
            </div>
        )
    }
}

export default Counter;