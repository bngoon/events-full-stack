import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home.jsx';
import Events from './screens/Events.jsx'
import EventDetail from './screens/EventDetail.jsx'
import EventCreate from './screens/EventCreate';
import EventEdit from './screens/EventEdit';
import Nav from "./components/Nav.jsx"



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/events' element={<Events/>}/>
     <Route path='/events/:name' element={<EventDetail/>}/>
     <Route path='/' element={<EventCreate/>}/>
     <Route path='/' element={<EventEdit/>}/>
     </Routes>
    </div>
  );
}

export default App;
