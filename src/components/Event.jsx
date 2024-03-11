import React from 'react'
import {Link} from 'react-router-dom'


function Event({event}) {
  return (
    <div>
        <Link to={`/events/${event._id}`}>
        <h2>{event.eventName} ({event.eventType})</h2>
        <p>Address: {event.address} Date: {event.date} </p>
        <p>Description: {event.description}</p>
      </Link>
    </div>
  )
}

export default Event