import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';
import {HashRouter, NavLink, Route, Routes} from 'react-router-dom';
import './SubApp.css';

function SubApp() {
    return (
        <HashRouter>
            <>
                <h1>Hello React Router DOM</h1>
                {/* NavLink는 a태그에서 Refresh를 제거하고 
                클릭한 링크에 active 클래스를 추가하는 기능 */}
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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
        </HashRouter>
    );
}

export default SubApp;