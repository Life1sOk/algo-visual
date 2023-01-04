import React, { useState } from "react";

import { CalendarContainer, CalendarTable, Weekday, CalendarHeader } from './index.style';
import Days from "./days/days.component";

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = () => {
    const [currentDay] = useState(new Date());

    const changeCurrentDay = () => console.log('changeCurrentDay');

    return(
        <CalendarContainer>
            <CalendarHeader>
                <h3>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h3>
            </CalendarHeader>
            <div className="calendar-body">
                <CalendarTable>
                    {
                        weekdays.map((weekday) => <Weekday key={weekday}><p>{weekday}</p></Weekday>)
                    }
                </CalendarTable>
                <Days currentDay={currentDay} changeCurrentDay={changeCurrentDay}/>
            </div>
        </CalendarContainer>
    )
}

export default Calendar;