import React from 'react'
import Component1 from './Component1'

const Button = ({count}) => {
  return (
    <div><span><Component1 count={count}/></span>I am Button</div>
  )
}

export default Button