import React, { useState, useEffect } from "react";

import { CalendarContainer, CalendarTable, Weekday, CalendarHeader, Arrow, BlankArrow, CalendarFooter } from './index.style';
import Days from "./days/days.component";
import Legend from "./legend/legend.component";

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    str: new Date().toDateString(),
    day: new Date().getDate(),
};

const calendarLegend = [
    { background: 'rgb(255,98,0)', title: 'current day'},
    { border: 'rgb(255,98,0)', title: 'active day'},
    { background: 'rgb(127, 0, 255)', title: 'planned day'},
    { background: 'rgb(128, 255, 0)', title: 'completed main'},
    { star: 'rgb(127, 0, 255)', title: 'completed secondary' },
    { background: 'rgb(255,51,51)', title: 'failed day'},
];

const Calendar = ({legend, later, window, dayHandler, buildingHandler, type, windowStatus}) => {
    const [current, setCurrent] = useState(date);

    const currentDayHandler = (currentDay) => {
        const { number, month, year } = currentDay;

        let payload = {
            number,
            month,
            monthStr: months[month],
            year,
        }

        if(dayHandler) dayHandler(payload);
    };

    const nextMonthHandler = () => {
        if(current.month < 11) setCurrent({...current, month: current.month + 1});
    };
    
    const laterMonthHandler = () => {
        if(current.month > 0) setCurrent({...current, month: current.month - 1});
    };

    useEffect(() => {
        const { day, month, year } = date;

        let payload = {
            number: day,
            month,
            monthStr: months[month],
            year
        }

        if(buildingHandler) buildingHandler(payload);
    }, [date, current]);


    return(
        <CalendarContainer window={window} windowStatus={windowStatus}>
            <CalendarHeader>
                {current.month > 0 ? <Arrow onClick={laterMonthHandler}>&#60;</Arrow> : <BlankArrow />}
                <h3>{months[current.month]} {current.year}</h3>
                {current.month < 11 ? <Arrow onClick={nextMonthHandler}>&#62;</Arrow> : <BlankArrow />}
            </CalendarHeader>
            <div className="calendar-body">
                <CalendarTable>
                    {
                        weekdays.map((weekday) => <Weekday key={weekday}><p>{weekday}</p></Weekday>)
                    }
                </CalendarTable>
                <Days currentDay={current} currentDayHandler={currentDayHandler} later={later} type={type}/>
            </div>
            <CalendarFooter>
                {   legend &&
                    calendarLegend.map((l, index) => <Legend key={index} data={l}/>)
                }
            </CalendarFooter>
        </CalendarContainer>
    )
}

export default Calendar;