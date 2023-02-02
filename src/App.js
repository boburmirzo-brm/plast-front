import React, {useRef, useState} from 'react';
import './App.css';
import {Paper} from './components/paper/Paper';
import ReactToPrint from "react-to-print";
import usePreventLeave from "./components/before-onload/BeforeUnload";

const initialColor = {
  x: "dodgerblue",
  y: "violet"
}

function App() {
  const componentRef = useRef();
  const [ state, setState ] = useState(false)
  const [ color, setColor ] = useState(JSON.parse(localStorage.getItem("color")) || initialColor )




  const { enablePrevent } = usePreventLeave();
  enablePrevent();
  return (
    <div className="app">
      <div className="controller">
        <button onClick={()=> setState(p=>!p)}>{state ?"Saqlash" :"O'zgartirsh"}</button>
        {
          !state &&  <ReactToPrint
          trigger={() => <button> Yuklab olish</button>}
          content={() => componentRef.current}
          /> 
        }
        {
          state && <>
            <input value={color.x} onChange={e=> {
              setColor({...color, x: e.target.value})
              localStorage.setItem("color", JSON.stringify(color))
            }} type="color" />
            <input value={color.y} onChange={e=> {
              setColor({...color, y: e.target.value})
              localStorage.setItem("color", JSON.stringify(color))
            }} type="color" />
            <button onClick={()=> {
              setColor(initialColor)
              localStorage.setItem("color", JSON.stringify(initialColor))
            }}>Default</button>
          </>
        }
      </div>
      <div className="container">
        <Paper ref={componentRef} state={state} color={color} />
      </div>
    </div>
  );
}

export default App;
