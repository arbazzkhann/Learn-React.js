import React from 'react'
import { useSelector } from 'react-redux'

function BookContainer() {
  const noOfBooks = useSelector(state => state.numberOfBooks)

  return (
    <>
      <div>BookContainer</div>
      <h2>No of Books - {noOfBooks}</h2>
    </>
  )
}

export default BookContainer