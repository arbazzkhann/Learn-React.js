import './App.css'

import { IncrementAction, DecrementAction, IncrementAction2, DecrementAction2 } from './Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, INCREMENT2, DECREMENT2} from './Redux/ActionsTypes';

function App() {
  const { count, count2 }= useSelector(state => state);
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
        <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
      </div>
      <div>
        <h1>Count2: {count2}</h1>
        <button onClick={() => dispatch(IncrementAction2())}>Increment</button>
        <button onClick={() => dispatch(DecrementAction2())}>Decrement</button>
      </div>
    </>
  ) 
}

export default App
