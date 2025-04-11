import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputRef = useRef(null);

  let inputFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={inputFocus}>Click me to focus</button>
    </>
  )
}

export default App
