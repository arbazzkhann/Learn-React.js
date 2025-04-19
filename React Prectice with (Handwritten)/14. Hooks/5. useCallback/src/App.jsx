import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  const memoizedFn = useCallback(() => {
    console.log("Only re-created if [count] changes.");
  })

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      </div>
    </>
  )
}

export default App
