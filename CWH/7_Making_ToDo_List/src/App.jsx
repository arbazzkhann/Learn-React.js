import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]"> 
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" />
          <button className='text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-6'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="button">
              <button className='text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-6'>Edit</button>
              <button className='text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-6'>Delete</button>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default App
