import React from 'react'
import Button from './Button'

const Navbar = ({count, setCount}) => {
  return (
    <div>
        <h1>Hello I am Navbar.</h1>
        <Button count={count} setCount={setCount}/>
    </div>
    
  )
}

export default Navbar