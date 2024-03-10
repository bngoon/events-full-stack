import api from "./apiConfig.js";

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error getting all events: ", error);
  }
};
