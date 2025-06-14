import { useRef, useState } from 'react'
import './App.css'

import RefComponent from './Components/RefComponent';

function App() {
  let ref = useRef();

  function inputChange() {
    ref.current.value = 1000;
    ref.current.focus();
  }

  return (
    <>
      <h1>Forward Ref</h1>
      <RefComponent ref={ref}/>
      <button onClick={inputChange}>Click me</button>
    </>
  )
}

export default App
