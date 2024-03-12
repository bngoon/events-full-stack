import { NavLink } from "react-router-dom"
import React from "react"
import "./Nav.css";
function Nav() {
  return (
    <div className="nav-container">
    <h1 className="landinghome">Welcome to NY Events</h1>
    <hr />
   <nav className="nav">
    <ul className="nav-ul">
   <li> <NavLink to="/">Home </NavLink></li>
   <li> <NavLink to="/events">Events </NavLink></li>
    <li><NavLink to='/add-event'>Add Event</NavLink></li>
   

    </ul>
   </nav>
   </div>
  )
}

export default Nav