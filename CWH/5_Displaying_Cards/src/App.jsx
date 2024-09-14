import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

//API LINK
// https://jsonplaceholder.typicode.com/posts 
// https://jsonplaceholder.typicode.com/comments


function App() {

  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts ');
    let data = await a.json();
    setCards(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return <div className='card'>
                    <h1>{card.title}</h1>
                    <p>{card.body}</p>
                    <span>by: UserID: {card.id}</span>
                </div>
        })}
      </div>

    </>
  )
}

export default App
