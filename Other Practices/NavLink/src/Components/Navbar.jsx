import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="m-0 flex items-center p-3 justify-around gap-3 bg-gray-200 h-full">
        <li>
          <NavLink to='/' className={({isActive}) => {return isActive ? "text-white bg-red-700" : ""}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => {return isActive ? "text-white bg-red-700" : ""}}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => {return isActive ? "text-white bg-red-700" : ""}}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
