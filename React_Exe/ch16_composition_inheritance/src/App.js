import logo from './logo.svg';
import './App.css';
// import WelcomeDialog from './ex02_containment/WelcomDialog';
// import SplitPane from './ex02_containment/SplitPane';
// import WelcomeDesc from './ex02_containment/WelcomeDesc';
// import AlarmDialog from './ex03_specialization/AlarmDialog';
import ProfileCard from './ex04_inheritance/ProfileCard';

function App() {
  // return (
    // <div style={{flexDirection: "row"}} className='App'>
    //   <WelcomeDialog/>
    //   <hr/>
    //   <WelcomeDialog/>
    //   <hr/>
    //   {/* children이 여러 개일 경우 */}
    //   <SplitPane
    //     left={<WelcomeDesc/>}
    //     right={<WelcomeDialog/>}
    //   />
    //   <hr/>
    //   <AlarmDialog/>
    // </div>
  // )
  return <ProfileCard/>
}

export default App;
