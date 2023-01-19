import React, { useEffect, useState, memo } from "react";

import { useSelector } from "react-redux";
import { selectActiveDay } from "../../../../../App/slices/daily.slice";

import { OneDay } from './day.style';

const Day = memo(({day, currentDayHandler, later}) => {
    const currentActiveDay = useSelector(selectActiveDay);

    const { currentMonth, selected, number, month, year } = day;
    const [activeByUser, setActiveByUser] = useState(false);
    const [ laterDay, setLaterDay ] = useState(false);

    const dayActivateHandler = () => {
        if(!laterDay) currentDayHandler(day)
    };
    
    useEffect(() => {
        if(later) {
            let laterTrue = ((month + 1) * 100 + number < (new Date().getMonth() + 1) * 100 + new Date().getDate());
    
            if(laterTrue) setLaterDay(laterTrue);
            if(!laterTrue) setLaterDay(false);
        }
    }, [month, number, later])

    useEffect(() => {
        if(currentActiveDay.number === number && currentActiveDay.month === month && currentActiveDay.year === year) {
            setActiveByUser(true);
        } else {
            setActiveByUser(false);
        }
    }, [currentActiveDay, month]);

    return(
        <OneDay currentMonth={currentMonth} selected={selected} laterDay={laterDay} onClick={dayActivateHandler} activeByUser={activeByUser}>
            <p>{number}</p>
        </OneDay>
    )
})

export default Day;