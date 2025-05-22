import './App.css'

import { IncrementAction, DecrementAction } from './Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(IncrementAction())}>Increment</button>
        <button onClick={() => dispatch(DecrementAction())}>Decrement</button>
      </div>
    </>
  )
}

export default App
