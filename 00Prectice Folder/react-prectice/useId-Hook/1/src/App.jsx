import { useId, useState } from 'react'
import './App.css'

function App() {
  let id = useId();
  let id2 = useId();

  return (
    <>
      <div>
        <h1>{id}</h1>
        <h1>{id2}</h1>
      </div>
    </>
  )
}

export default App
