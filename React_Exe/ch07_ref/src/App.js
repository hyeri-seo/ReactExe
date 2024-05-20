import React, { Component } from 'react';
import './App.css';
// import ValidationSample from './ex02_validation/ValidationSample';
// import ValidationSample from './ex03_validation_ref/ValidationSample';
// import ValidationSample from './ex04_create_ref/ValidationSample';
import ScrollBox from './ex05_component_ref/ScrollBox';

class App extends Component {
  // return <ValidationSample/>
  // return <ScrollBox/>
  render() {
    return (
      <div>
          <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
          <button onClick={() => this.ScrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
      </div>
      );
  }
}

export default App;
