import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const users = ["Arbaz", "Manav", "User1", "User2"];

    return (
        <>
            <NavLink to='/' className={({isActive}) => {return isActive ? "red" : ""}}> <li> Home </li> </NavLink>
            <NavLink to='/contact'  className={({isActive}) => {return isActive ? "red" : ""}}> <li> Contact </li> </NavLink>

            <div>
                {users.map((i)=> {return (<div><NavLink to={"/user/" + i} className={({isActive}) => {return isActive ? "red" : ""}}><li> {i} </li></NavLink></div>) })}
            </div>
        </>
    )
}

export default Navbar