import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../Context/Context'

const Button = () => {
  const {count, setCount} = useContext(counterContext)
  return (
    <>
      <button onClick={() => {setCount(count + 12454)}}>I am Button<Component1 /></button>
    </>
  )
}

export default Button