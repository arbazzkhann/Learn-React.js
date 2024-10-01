import { useState } from 'react'
import './App.css'
import MyContextStates from './Context/Context'
import Button from './Component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyContextStates.Provider value={{count, setCount}}>
          <Button />
      </MyContextStates.Provider>
    </>
  )
}

export default App
