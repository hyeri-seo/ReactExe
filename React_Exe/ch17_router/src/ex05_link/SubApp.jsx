import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function SubApp() {
    return (
        // 주소와 컴포넌트 연결 기능인 route를 사용하는 하위 영역에는 반드시
        // <BrowserRouter>를 감싸줘야 한다.
        <BrowserRouter>
            <>
                <h1>Hello React Router DOM</h1>
                {/* <a/>태그는 기본 기능이 주소 이동 + 화면 Refresh를 함
                그래서 화면상의 컴포넌트가 초기화되는데
                이것을 js에서 preventDefault()로 종종 막음
                다른 컴포넌트로 이동하되 refresh를 막기 위해 <link/>를 사용함 */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {/* 각 <Route/>는 <Routes/>로 감싸줘야 한다. */}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/topics' element={<Topics/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    {/* 위에 주소와 연결된 컴포넌트를 제외한 나머지는 아래에서 모두 처리 */}
                    <Route path='/*' element={'Not Found'}/>
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default SubApp;