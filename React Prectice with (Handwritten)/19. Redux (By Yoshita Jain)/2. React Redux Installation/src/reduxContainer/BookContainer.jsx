import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyBook, sellBook} from './BookAction';

function BookContainer() {
  const noOfBooks = useSelector(state => state.numberOfBooks)
  const dispatch = useDispatch();

  return (
    <>
      <h1>BookContainer</h1>
      <h2>No of Books : {noOfBooks}</h2>
      <button onClick={() => dispatch(buyBook())}>Buy Book</button>
      <button onClick={() => dispatch(sellBook())}>Sell Book</button>
    </>
  )
}

export default BookContainer