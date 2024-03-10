import api from "./apiConfig.js";

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error getting all events: ", error);
  }
};

export const getEvent = async (eventName) => {
  try {
    const response = await api.get(`/events/${eventName}`);
    return response.data;
  } catch (error) {
    console.error("Error getting event", error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await api.post("/events", eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event", error);
    throw error;
  }
};

export const editEvent = async (`/events/${eventName}`, eventData) => {
  try {
      const response = await api.get(eventName, eventData)
      return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteEvent = async (eventName) => {
  try {
    const response = await api.delete(`/events/${eventName}`)
  } catch (error) {
    console.error(error)
  }
}