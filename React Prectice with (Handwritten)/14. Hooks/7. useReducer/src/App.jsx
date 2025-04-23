import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment': return {count: state.count + 1};
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <>
      <div>
        <button onClick={() => dispatch({type: "Increment"})}>Increment {state.count}</button>
      </div>
    </>
  )
}

export default App
