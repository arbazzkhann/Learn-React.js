import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import { IncrementAction, DecrementAction} from './Redux/Actions';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

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
