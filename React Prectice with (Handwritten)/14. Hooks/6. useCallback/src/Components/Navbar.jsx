import React, {memo} from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered.");
  return (
    <div>
      <h1>I am an { adjective } Navbar.</h1>
      <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)