import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import myValueContext from './Context/Context'
import Button from './Components/Button'

function App() {

  const [myValue, setMyValue] = useState(0)

  return (
    <>
      <Navbar/>
      <myValueContext.Provider value={{myValue, setMyValue}}>
          <Button/>
      </myValueContext.Provider>
    </>
  )
}

export default App
