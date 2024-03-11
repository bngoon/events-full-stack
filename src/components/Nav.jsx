import { NavLink } from "react-router-dom"
import React from "react"
import "./Nav.css";
function Nav() {
  return (
   <nav className="nav">
    <ul>
   <li> <NavLink to="/">Home </NavLink></li>
   <li> <NavLink to="/events">Events </NavLink></li>
    <li><NavLink to='/add-event'>Add Event</NavLink></li>
   

    </ul>
   </nav>
  )
}

export default Nav