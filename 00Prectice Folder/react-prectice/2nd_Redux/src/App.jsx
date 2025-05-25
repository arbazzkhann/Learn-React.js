import './App.css'

import { useDispatch, useSelector } from 'react-redux';

import { IncrementAction, DecrementAction } from './React/Actions'
import { IncrementAction2, DecrementAction2 } from './React/Actions'

function App() {
  const {count, count2} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(IncrementAction())}>Increment</button>
      <button onClick={() => dispatch(DecrementAction())}>Decrement</button>

      <h1>count: {count2}</h1>
      <button onClick={() => dispatch(IncrementAction2())}>Increment</button>
      <button onClick={() => dispatch(DecrementAction2())}>Decrement</button>
    </>
  )
}

export default App
