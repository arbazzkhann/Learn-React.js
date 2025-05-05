import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createStore } from 'react'


function App() {
  const increment = {
    type: 'increment'
  }

  function counterReducer(state = {count : 0}, action) {
    switch(action.type) {
      case 'increment': 
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  const store = createStore(counterReducer);

  store.dispatch({ type: 'INCREMENT' });
  console.log(store.getState()); // { count: 1 }

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
