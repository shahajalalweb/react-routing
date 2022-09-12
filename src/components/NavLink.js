import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
  return (
    <nav className="navDiv">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
    </nav>
  )
}

export default Navlink