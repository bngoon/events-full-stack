import { NavLink } from "react-router-dom"


function Nav() {
  return (
   <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/event-signup">Event Sign Up</NavLink>

   </nav>
  )
}

export default Nav