import React, { useState, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './style.css';
import { PlannerContext } from '../../Context/mainContext';

export default function CalendarComponent () {
    const [value, onChange] = useState(new Date());
    const { setSelectedDate, selectedDate } = useContext(PlannerContext);

    const handleClick = (newDate) => {
      onChange();
      setSelectedDate(newDate);
    }

    return (
        <div>
          {selectedDate}
          <Calendar
            onChange={(event, value) => handleClick(value.target.ariaLabel)}
            value={value}
          />
        </div>
    )
}