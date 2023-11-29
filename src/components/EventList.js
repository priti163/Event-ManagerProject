import React from "react";
import "./EventList.css";

function EventList({ events }) {
  return (
    <div className="event-list-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-description">{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
