import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoCard from './Components/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <InfoCard name={"Arbaz Khan"} age={22}/>
        <InfoCard name={"MD. Farhan"} age={9  }/>
      </div>
    </>
  )
}

export default App
