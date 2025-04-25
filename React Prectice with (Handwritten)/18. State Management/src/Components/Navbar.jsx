import React, { useContext } from 'react'
import myCountContext from './Context'

const Navbar = () => {
  const {count} = useContext(myCountContext)
  return (
    <div>
        <h1>I am Navbar count: {count}</h1>
    </div>
  )
}

export default Navbar