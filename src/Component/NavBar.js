import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div >
      <span><NavLink to='/'>Home</NavLink></span>
      <span><NavLink to='/About'>About</NavLink></span>
    </div>
  )
}

export default NavBar