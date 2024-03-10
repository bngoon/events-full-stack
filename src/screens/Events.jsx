import React from 'react'
import { useState, useEffect } from 'react';

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
      <h1>All Events!</h1>
      <div className='events-container'>
    
      </div>
    </div>
  )
}

export default Events