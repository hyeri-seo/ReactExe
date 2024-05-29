import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';

function SubApp() {
    return (
        <>
            <h1>Hello React Router DOM</h1>
            <Home/>
            <Topics/>
            <Contact/>
        </>
    );
}

export default SubApp;