import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store/shareStore';

function Counter() {
    const dispatch = useDispatch(); // redux store에 저장된 reducer에 이벤트 전달
    const count = useSelector(state => state.counter.value);    // redux store에 저장된 객체의 value필드 값을 가져옴
    const mCount = useSelector(state => state.counter.mValue);
    const str = useSelector(state => state.append.value);

    return (
        <div>
            <button onClick={() => {
                dispatch({type:'counterSlice/up', step:2});  // reducer의 action에 객체 전달
            }}>+</button> {count}
            <br/>
            <button onClick={() => {
                dispatch({type:'counterSlice/down', step:2});  // reducer의 action에 객체 전달
            }}>-</button> {mCount}
            <br/>
            <button onClick={() => {
                dispatch({type:'strSlice/append', ch:'0'});  // reducer의 action에 객체 전달
            }}>append</button> {str}
        </div>
    )
}

function MainApp() {
    return(
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;