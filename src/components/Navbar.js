import React from 'react'
import "../Navbar.css"
import pilot from "../assets/pilot.webp"
import { NavLink } from 'react-router-dom'



function Navbar() {

  return (
    <nav className='navbar'>
       
       
<div className='links'>
  <div>

    <img src={pilot} alt="" className='logo' />
    </div>
    <div>
        <NavLink
        to="/"
        className="navlink"
        
        >
        HOME
      </NavLink>
      </div>
      <div>
        <NavLink
        to="/booking"
        className="navlink"
        
      >
        BOOKING</NavLink>
      </div>
       <div>
        <NavLink
        to="/showbooking"
        className="navlink"
        
      >
        BOOKINGLIST</NavLink>
      </div>
      <div>
       <NavLink
        to="/about"
        
    className="navlink"
      >
        ABOUT
      </NavLink>
</div>
    </div>    
   
    
   </nav>
    
  )
}

export default Navbar