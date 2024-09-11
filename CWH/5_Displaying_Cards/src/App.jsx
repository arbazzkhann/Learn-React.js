import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//API LINK
// https://jsonplaceholder.typicode.com/posts 
// https://jsonplaceholder.typicode.com/comments


function App() {

  const [cards, setCards] = useState([])

  const fetchData = async () => {
    // let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let a = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await a.json()
    setCards(data);
    console.log(data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h5>
              
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.email}
              </p>
            </div>
          );
        }
      )
    }
      </div>      
    </>
  )
}

export default App
