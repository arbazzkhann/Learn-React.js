import React, { useState } from 'react'
import myCountContext from './Components/Context'
import Navbar from './Components/Navbar';
import Farhan from './Components/Farhan';


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <myCountContext.Provider value={{count, setCount}}>
      <div>
        <Navbar />
        <button onClick={() => setCount(count + 1)}>Click me!</button>

        <Farhan/>
      </div>
    </myCountContext.Provider>
  )
}

export default App