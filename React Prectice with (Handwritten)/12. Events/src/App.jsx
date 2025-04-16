import { useState, useRef } from 'react';
import './App.css'

function App() {

  //for onClickEvent()
  function OnClickEvent() {
    alert("OnClickEvent");
  }


  //for onChnageEvent()
  const [myInput, setMyInput] = useState(0)
  function OnChangeEvent(e) {
    setMyInput(e.target.value)
  }

  //for onSubmit()
    const handleSubmit = (e) => {
      e.preventDefault(); //stop page from reloading
      alert("For Submitted!");
    }

  return (
    <>
      <div>
        {/* for onCLick() event */}
        <button onClick={OnClickEvent}>ON CLiCK EVENT</button>

        {/* for onChnageEvent() event */}
        <input onChange={OnChangeEvent} type="text"/>
        <h1>{myInput}</h1>

        {/* for onSubmit() event */}
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type='submit'> Submit </button>
        </form>

      </div>
    </>
  )
}

export default App
