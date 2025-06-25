import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card" style={{ backgroundColor: event.color || '#3498db' }}>
      <div className="event-title">{event.title}</div>
      <div className="event-time">{event.time}</div>
    </div>
  );
};

export default EventCard;