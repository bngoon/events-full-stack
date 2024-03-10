import { NavLink } from "react-router-dom"


function Nav() {
  return (
   <nav>
    <NavLink to="/">Home </NavLink>
    <NavLink to="/events">Events </NavLink>
    <NavLink to="/event-create">Add Event</NavLink>

   </nav>
  )
}

export default Nav