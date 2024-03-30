import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getEvent, deleteEvent } from "../services/events";
import "./EventDetail.css";

function EventDetail() {
  const [events, setEvents] = useState({});

  let { name } = useParams();
  let navigate = useNavigate();

  const fetchEvents = async () => {
    const oneEvent = await getEvent(name);
    setEvents(oneEvent);
  };

  useEffect(
    () => async () => {
      fetchEvents();
    },
    []
  );

  const handleDelete = async (name) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    
    if (isConfirmed) {
      
      await deleteEvent(name);  // Assuming deleteEvent is defined elsewhere
      navigate("/events");
    }
  };



  return (
    <div className="event-detail-container">
       <div className="event-detail">
      <h1>{events.eventName}</h1>
      <p>{events.decscription}</p>
      <p>
        <strong>Address:</strong> {events.address} <strong>Date:</strong>
        {events.date}
       
      </p>
      <p>
        <strong>Description: </strong>
        {events.description}
      </p>
      <p>
      <strong>Website Link: </strong>{" "}
        <a href={events.websiteLink} target="_blank" rel="noopener noreferrer">
          {events.websiteLink}
        </a>
      </p>

      <div>
        <Link to={`/events/${name}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
      </div>
    </div>
  );
}

export default EventDetail;
