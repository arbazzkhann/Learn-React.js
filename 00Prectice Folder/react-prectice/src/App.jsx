import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoCard from './Components/InfoCard'
import myArr from './Resources/JSON_DATA/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {
          myArr.map((item) => {
            return <InfoCard key={item.id} name={item.name} age={item.age} image={item.image}/>
          })
        }
      </div>
    </>
  )
}

export default App
