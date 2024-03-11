import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getEvent, deleteEvent } from "../services/events";

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

  const handleDelete = async () => {
    await deleteEvent(name);
    navigate("/events");
  };

  return (
    <div>
      <h1>{events.eventName}</h1>
      <p>{events.decscription}</p>
      <p>
        Address: {events.address} Date: {events.date}
      </p>
      <p>Description: {events.description}</p>

      <div>
        <Link to={`/events/${name}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default EventDetail;
