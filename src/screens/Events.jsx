import React from 'react'
import { useState, useEffect } from 'react';
import { getEvents } from "../services/events.js";
import Event from '../components/Event.jsx'


function Events() {
  const [events, setEvents] = useState([])

  async function fetchEvents() {
    const allEvents = await getEvents()
    setEvents(allEvents)
  }

  useEffect(()=> {
    fetchEvents()
  }, [])


  return (
    <div>
      { <h1>Upcoming Events</h1> }
      <div className='events-container'>
        {
          events.map((event) => (
            <Event event={event} key={event._id}/>
          ))
        }
    
      </div>
    </div>
  )
}

export default Events

