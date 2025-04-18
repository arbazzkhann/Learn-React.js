import React, { useContext } from 'react'
import { counterContext } from '../Context/context'

const Component1 = () => {
  const {counter} = useContext(counterContext)

  return (
    <div>
      <h1>I am component1, and count is {counter}</h1>
    </div>
  )
}

export default Component1