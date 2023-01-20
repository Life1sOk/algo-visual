import React, { memo } from "react";

import { DaysContainer } from './days.style';
import Day from "../day/day.component";

const Days = memo(({currentDay, currentDayHandler, later, type}) => {

  let firstDayOfMonth = new Date(currentDay.year, currentDay.month, 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 35; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate());
      } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }
    
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === currentDay.month),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          selected: (firstDayOfMonth.toDateString() === currentDay.str),
          year: firstDayOfMonth.getFullYear(),
        }
            
        currentDays.push(calendarDay);
  }

  return(
    <DaysContainer>
      {
        currentDays?.map((day, index) => <Day key={index} day={day} currentDayHandler={currentDayHandler} later={later} type={type}/>)
      }
    </DaysContainer>
  )
})

export default Days;