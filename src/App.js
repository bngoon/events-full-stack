import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home.jsx";
import Events from "./screens/Events.jsx";
import EventDetail from "./screens/EventDetail.jsx";
import EventCreate from "./screens/EventCreate";
import EventEdit from "./screens/EventEdit";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:name" element={<EventDetail />} />
        <Route path="/add-event" element={<EventCreate />} />
        <Route path="/events/edit" element={<EventEdit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// GET	/api/event/	To find all the events going on
// GET	/api/event/:eventName	To find one event by the name
// POST	/api/event/	To create a event
// PATCH	/api/event/:eventName	To edit the details of that specific event
// DELETE	/api/event/:eventName	To delete a single event
