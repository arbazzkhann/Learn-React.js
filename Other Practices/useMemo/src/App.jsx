import { useMemo, useState } from 'react'
import './App.css'
import initialItems from './Components/Util'

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items])

  const myArr = Array(10_000).fill(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <h1>{myArr[1000]}</h1>
    </>
  )
}

export default App
