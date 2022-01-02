import React, { useState, useContext, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './style.css';
import { PlannerContext } from '../../Context/mainContext';

export default function CalendarComponent () {
    const [value, onChange] = useState(new Date());
    const { setSelectedDate, toggleModal, setActiveModal } = useContext(PlannerContext);

    const handleClick = (newDate) => {
      onChange();
      console.log(newDate);
      setSelectedDate(Date.parse(newDate));
      setActiveModal('Create');
      toggleModal(true);
    }

    // useEffect(() => {
    //   document.getElementsByClassName('react-calendar__tile')[].style.background = 'red';
    // }, []);

    return (
        <div>
          <Calendar
            onClickDay={(value, event) => handleClick(value)}
            value={value}
          />
        </div>
    )
}