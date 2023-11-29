import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="app-container">
      <h1>Event Creator</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
