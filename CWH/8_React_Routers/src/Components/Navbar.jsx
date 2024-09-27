import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  

  return (
    // <div>
    //     <nav>
    //         <Link to="/"><li>Home</li></Link>
    //         <Link to="/Login"><li>Login</li></Link>
    //         <Link to="/About"><li>About</li></Link>
    //     </nav>
    // </div>
    <div>
        <nav>
            <NavLink className={(e) => {return e.isActive ? "red": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? "red": ""}} to="/Login"><li>Login</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? "red": ""}} to="/About"><li>About</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar