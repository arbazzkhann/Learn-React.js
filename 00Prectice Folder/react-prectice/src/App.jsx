import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoCard from './Components/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  let myArr = [{
    name: "Arbaz Khan",
    age: 22
    },
    {
      name: "Mohd. Farhan",
      age: 9
    },
    {
      name: "MD. Subhan",
      age: 16
    }
  ] 

  return (
    <>
      <div>
        {
          myArr.map((item) => {
            return <InfoCard name={item.name} age={item.age}/>
          })
        }
      </div>
    </>
  )
}

export default App
