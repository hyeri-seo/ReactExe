import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        // 바로 다시 입력할 수 있도록. 버튼이 아니라 input에 focus를 강제로 줌
        this.input.focus();
    }


    // input 요소를 this.input이 가리키게 됨
    render() {
        return (
            <div>
                <input
                    ref={(ref) => {this.input = ref}}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked?(this.state.validated?'success':'failure'):''} />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
