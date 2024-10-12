import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

import Count from './Components/Count'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={e => dispatch({ type: 'Increment' })}>Increment</button>
          <Count />
        <button onClick={e => dispatch({ type: 'Decrement' })}>Decrement</button>
      </div>
    </>
  )
}

export default App
