import React, { useCallback, useState } from 'react'

import List from './Components/List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  }


  return (
    <>
      <div style={theme} > 
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark(prevDark => !prevDark)}>
            Toggle Button
          </button>
          <List getItems={getItems}/>

      </div>
    </>
  )
}

export default App
