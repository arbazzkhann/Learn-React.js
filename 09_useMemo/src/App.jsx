import { useMemo, useState } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMegical: i === 29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const megical = numbers.find(item => item.isMegical === true)   //it will calculate every time when dom is manipulated.
  const megical = useMemo(() => numbers.find(item => item.isMegical === true), [])  //it will memoize the calculated value and not calculate on every dom manipulation.
  
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
      </div>
    </>
  )
}

export default App
