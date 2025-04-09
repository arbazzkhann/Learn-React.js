import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoCard from './Components/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  let myArr = [{
    name: "Arbaz Khan",
    age: 22,
    image: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg"
    },
    {
      name: "Mohd. Farhan",
      age: 9,
      image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
    },
    {
      name: "MD. Subhan",
      age: 16,
      image: "https://gratisography.com/wp-content/uploads/2023/06/gratisography-happy-food-free-stock-photo-1170x780.jpg"
    }
  ] 

  return (
    <>
      <div>
        {
          myArr.map((item) => {
            return <InfoCard name={item.name} age={item.age} image={item.image}/>
          })
        }
      </div>
    </>
  )
}

export default App
