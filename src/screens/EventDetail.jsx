import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getEvent, deleteEvent } from '../services/events'

function EventDetail() {
  const [events, setEvents] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchEvents = async() => {
    const oneEvent = await getEvent(id)
    setEvents(oneEvent)
  }

  useEffect(() => async () => {
    fetchEvents()
  }, [])

  const handleDelete = async () => {
    await deleteEvent(id)
    navigate("/events")
  }

  return (
    <div>
<h1>{events.eventName}</h1>
<p>{events.decscription}</p>

<div>
        <Link to={`/events/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default EventDetail