import React, { useState } from "react";
import "./EventForm.css";

function EventForm({ onAddEvent }) {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventData);
    setEventData({ title: "", date: "", description: "" });
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventData.description}
          onChange={handleChange}
          required
          className="textarea-field"
        />
        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
