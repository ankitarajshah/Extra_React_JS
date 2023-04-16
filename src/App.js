// import logo from './logo.svg';
import './App.css';
import Start from './Component/01_Start'
import Users from './Component/02_Users'
// import React_withcondition from './Component/03_React_withcondition'
import StateUpdateData from './Component/04_UseStateUpdatedata'
import UseState from './Component/05_UseState';
import UseStatedata from './Component/06_UseStatedata';


function App() {
  return (
    <div className="App">

        <h1>Hello</h1>
        <Start/> 
        <Users/>  
        {/* <React_withcondition/> */}
        <StateUpdateData/>
        <UseState/>
        <UseStatedata/>
    </div>
  );
}

export default App;
