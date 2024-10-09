import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './Redux/Counter/CounterSlice'

import Navbar from './Components/Navbar'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        Current count is: {count} <br />
        Decrement <button onClick={() => dispatch(decrement())}>-</button> <br />
        Multiply <button onClick={() => dispatch(multiply())}>*</button> <br />
        Increment <button onClick={() => dispatch(increment())}>+</button> <br />
        Increment By Amount <button onClick={() => dispatch(incrementByAmount(6))}>+</button> <br />
      </div>
    </>
  )
}

export default App
