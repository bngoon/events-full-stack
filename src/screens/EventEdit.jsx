import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEvent, editEvent } from "../services/events"
function EventEdit() {
  const [events, setEvents] = useState({
    eventName: "",
    date: "",
    eventType: "",
    address: "",
    description: " ",
    borough: [""],
    neighborhood: "",
    websiteLink: ""
})

let {id} = useParams();
let navigate = useNavigate();

async function fetchEvents() {
  const oneEvent = await getEvent(id)
  setEvents(oneEvent)
}
useEffect(()=> {
  fetchEvents();
},[]);

const handleSubmit = async (e) => {
  e.preventDefault();

  await editEvent(id, events);
  navigate(`/events/${id}`)

}
const handleChange = (e) => {
  const { name, value} = e.target;
  setEvents ((prevEvent) => ({
    ...prevEvent,
    [name]: value,
}));


}


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

export default EventEdit