import React from 'react'
import { useState } from 'react'
import { createEvent } from '../services/events.js'
import { useNavigate } from 'react-router-dom'

function EventCreate() {
  const [events, setEvents] = useState({
    eventName: "",
    date: "",
    eventType: "",
    address: "",
    description: " ",
    borough: "",
    neighborhood: "",
    websiteLink: ""
})

let navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  await createEvent(events)
  navigate("/events")
};

const handleChange = (e) => {
  const {name, value} = e.target;

  setEvents ((prevEvent) => ({
      ...prevEvent,
      [name]: value,
  }))
};

// const handleCheckboxChange = (e) => {
//   const {eventName, checked} = e.target;

//   setEvents((prevEvent)=> ({
//     ...prevEvent,
//     [eventName]: checked,
//   }))
// }


  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder="event"
        name="eventName"
        value={events.eventName}
        onChange={handleChange}
        />
   <input
          type="text"
          placeholder="date"
          name="date"
          value={events.date}
          onChange={handleChange}
        />
           <input
          type="text"
          placeholder="Event Type"
          name="eventType"
          value={events.eventType}
          onChange={handleChange}
        />
           <input
          type="text"
          placeholder="Address"
          name="address"
          value={events.address}
          onChange={handleChange}
        />
           <input
          type="text"
          placeholder="event description"
          name="description"
          value={events.description}
          onChange={handleChange}
        />
          <input
          type="text"
          placeholder="borough"
          name="borough"
          value={events.borough}
          onChange={handleChange}
        />
          <input
          type="text"
          placeholder="neighborhood"
          name="neighborhood"
          value={events.neighborhood}
          onChange={handleChange}
        />
          <input
          type="text"
          placeholder="website link"
          name="websiteLink"
          value={events.websiteLink}
          onChange={handleChange}
        />
        <button type='submit'>Create Event!</button>
      </form>
    </div>
  )
}

export default EventCreate