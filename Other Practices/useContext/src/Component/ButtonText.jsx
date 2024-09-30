import React , { useContext } from 'react'
import MyContextStates from '../Context/Context'

const ButtonText = () => {
  const value = useContext(MyContextStates)

  return (
    <div>ButtonText and Count Value is: {value.count}</div>
  )
}

export default ButtonText