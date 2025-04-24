import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link> */}
        </ul>
    </div>
  )
}

export default Navbar