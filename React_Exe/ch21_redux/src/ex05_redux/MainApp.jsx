import { useState } from 'react';
import './style.css';
import Left1 from './Left1';
import Right1 from './Right1';
import {Provider} from 'react-redux';
import numberStore from './numberStore';

function MainApp() {
    return (
        <div id='container'>
            <h1>Root</h1>
            <div id='grid'>
                {/* 아래 영역에서 numberStore를 통해 변수/객체/함수를 공유할 수 있음
                혹은 이벤트를 전달할 수 있음 */}
                <Provider store={numberStore}>
                    <Left1/>
                    <Right1/>
                </Provider>
            </div>
        </div>
    )
}

export default MainApp;