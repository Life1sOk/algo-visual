import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changeCurrentDay, changeActivePlanDay } from "../../../../App/slices/daily.slice";

import { CalendarContainer, CalendarTable, Weekday, CalendarHeader } from './index.style';
import Days from "./days/days.component";

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = () => {
    const dispatch = useDispatch();
    const [currentDay] = useState(new Date());

    const currentDayHandler = (currentDay, selected) => {
        const { number, month, year } = currentDay;

        let payload = {
            number,
            month,
            monthStr: months[month],
            year,
        }

        if(selected) dispatch(changeCurrentDay(payload));

        dispatch(changeActivePlanDay(payload));
    };

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
                <Days currentDay={currentDay} currentDayHandler={currentDayHandler}/>
            </div>
        </CalendarContainer>
    )
}

export default Calendar;