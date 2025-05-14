import './App.css'

import { useSelector, useDispatch } from 'react-redux';
import { buyBook, sellBook } from './redux/Action'

function App() {

  const numberOfBooks = useSelector(state => state.numberOfBooks);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Number of Books: {numberOfBooks}</h1>
        <button onClick={() => dispatch(buyBook())}>Buy Book</button>
        <button onClick={() => dispatch(sellBook())}>Sell Book</button>
      </div>
    </>
  )
}

export default App
