import React, { useContext } from 'react'
import {counterContext} from '../context/context'

const Random = () => {
  const counter = useContext(counterContext);

  return (
    <>
        <div>Hello i am Random</div>
        <p>{counter}</p>
    </>
  )
}

export default Random