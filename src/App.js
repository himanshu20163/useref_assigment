import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';


function App() {

  const [timer ,settimer] = useState(0);
  let timeid= useRef(null);

  const start_time = ()=>{
    
  timeid.current = setInterval(()=>{
    settimer((prevtime) => prevtime+1);
  },1000)
  }

  const stop_time = () =>{
      clearInterval(timeid.current);
  }
  return (
    <div className="App">
      <h1>Use ref Assigment</h1>
      <h3>{timer}</h3>
      <button onClick={start_time} className="button1" style={{backgroundColor:"green",width:"8%",color:"white",padding:"10px",margin:"10px",border:"none"}}>Start</button>
      <button onClick={stop_time} className="button1" style={{backgroundColor:"red",width:"8%",color:"white",padding:"10px",padding:"10px",margin:"10px",border:"none"}}>Stop</button>
    </div>
  );
}

export default App;
