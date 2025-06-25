import React, { useState } from 'react';
import './EventModal.css';

const EventModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [color, setColor] = useState('#3498db');

  const handleSave = () => {
    if (title && date) {
      onSave({ title, date, time, color, id: Date.now() });
      setTitle('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Add New Event</h3>
        
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="#3498db">Blue</option>
          <option value="#e74c3c">Red</option>
          <option value="#2ecc71">Green</option>
          <option value="#f39c12">Orange</option>
          <option value="#9b59b6">Purple</option>
        </select>
        
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;