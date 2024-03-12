import React from 'react'
import {Link} from 'react-router-dom'


function Event({event}) {
  return (
    <div className='events'>
        <Link to={`/events/${event.eventName}`}>
        <h2 className='events-names'>{event.eventName} ({event.eventType})</h2>
       
      </Link>
    </div>
  )
}

export default Event