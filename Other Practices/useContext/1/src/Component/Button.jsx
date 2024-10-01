import { useContext } from "react";
import MyContextStates from "../Context/Context";
import ButtonText from "./ButtonText";

import React from 'react'

const Button = () => {
  const {count, setCount} = useContext(MyContextStates)

  return (
    <div>
        <button onClick={() => {setCount(count + 1)}}><ButtonText /></button>
    </div>
  )
}

export default Button


