import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { incrementActions, decrementActions } from './redux/Actions'

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementActions())}>Increment</button>
      <button onClick={() => dispatch(decrementActions())}>Decrement</button>
    </>
  )
}

export default App
