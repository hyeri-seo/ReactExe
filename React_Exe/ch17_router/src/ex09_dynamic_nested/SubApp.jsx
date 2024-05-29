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
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/topics/*' element={<Topics/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/*' element={'Not Found'}/>
                </Routes>
            </>
        </HashRouter>
    );
}

export default SubApp;