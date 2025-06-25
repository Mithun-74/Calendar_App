import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isToday,
  formatDate
} from '../utils/dateUtils';
import EventCard from './EventCard';
import './CalendarGrid.css';

const CalendarGrid = ({ currentMonth, events }) => {
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  let day = startDate;
  const rows = [];

  while (day <= endDate) {
    const days = Array(7).fill().map(() => {
      const formattedDate = formatDate(day, 'yyyy-MM-dd');
      const dayEvents = events.filter(ev => ev.date === formattedDate);

      const cell = (
        <div
          className={`calendar-cell ${!isSameMonth(day, currentMonth) ? 'outside-month' : ''} ${isToday(day) ? 'today' : ''}`}
          key={day}
        >
          <div className="date-label">{formatDate(day, 'd')}</div>
          {dayEvents.map((ev, idx) => (
            <EventCard key={idx} event={ev} />
          ))}
        </div>
      );

      day = addDays(day, 1);
      return cell;
    });

    rows.push(<div className="calendar-row" key={day}>{days}</div>);
  }

  return (
    <div className="calendar">
      <div className="calendar-row day-labels">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
          <div className="day-name" key={i}>{day}</div>
        ))}
      </div>
      {rows}
    </div>
  );
};

export default CalendarGrid;