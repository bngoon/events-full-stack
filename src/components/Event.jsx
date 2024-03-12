import React from 'react'
import {Link} from 'react-router-dom'
import "./Event.css"

function Event({event}) {
  return (
    <div className='event-container'>
        <Link to={`/events/${event.eventName}`}>
        <div className='event'>
        <h2 className='events-names'>{event.eventName} ({event.eventType})</h2>
        </div>
      </Link>
    </div>
  )
}

export default Event