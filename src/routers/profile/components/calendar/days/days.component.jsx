import React from "react";

import { DaysContainer } from './days.style';
import Day from "../day/day.component";

const Days = ({currentDay, currentDayHandler}) => {

  let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }
    
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          selected: (firstDayOfMonth.toDateString() === currentDay.toDateString()),
          year: firstDayOfMonth.getFullYear(),
        }
            
        currentDays.push(calendarDay);
  }

  return(
    <DaysContainer>
      {
        currentDays?.map((day, index) => <Day key={index} day={day} currentDayHandler={currentDayHandler}/>)
      }
    </DaysContainer>
  )
}

export default Days;