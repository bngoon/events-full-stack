import React from 'react'
import { useState, useEffect } from 'react';
import { getEvents } from "../services/events.js";
import Event from '../components/Event.jsx'
import "./EventScreen.css"

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
    <div className='eventscreen-container'>
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
    </div>
  )
}

export default Events

