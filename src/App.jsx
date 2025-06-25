import React, { useState } from 'react';
import { addMonths, subMonths } from './utils/dateUtils';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import './App.css';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>⬅️</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>➡️</button>
      </div>

      <button className="add-btn" onClick={() => setShowModal(true)}>+ Add Event</button>

      <CalendarGrid currentMonth={currentMonth} events={events} />

      {showModal && (
        <EventModal onClose={() => setShowModal(false)} onSave={handleAddEvent} />
      )}
    </div>
  );
};

export default App;