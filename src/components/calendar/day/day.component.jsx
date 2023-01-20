import React, { useEffect, useState, memo } from "react";

import { useSelector } from "react-redux";
import { selectActiveDay, selectNextDay } from "../../../App/slices/daily.slice";

import { OneDay } from './day.style';

const Day = memo(({day, currentDayHandler, later, type}) => {
    const { currentMonth, selected, number, month, year } = day;

    const currentActiveDay = useSelector(selectActiveDay);
    const nextPlanDay = useSelector(selectNextDay);

    const [ activeByUser, setActiveByUser ] = useState(false);
    const [ laterDay, setLaterDay ] = useState(false);
    const [ nextDay, setNextDay ] = useState(false);

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
        if( type === 'main' && currentActiveDay.number === number && currentActiveDay.month === month && currentActiveDay.year === year) {
            setActiveByUser(true);
        } else {
            setActiveByUser(false);
        }
    }, [currentActiveDay, month, number, year, type]);

    useEffect(() => {
        if( type === 'planner' && nextPlanDay.number === number && nextPlanDay.month === month && nextPlanDay.year === year ) {
            setNextDay(true);
        } else {
            setNextDay(false);
        }
    }, [nextPlanDay, month, number, year, type])

    return(
        <OneDay currentMonth={currentMonth} selected={selected} laterDay={laterDay} nextDay={nextDay} onClick={dayActivateHandler} activeByUser={activeByUser}>
            <p>{number}</p>
        </OneDay>
    )
})

export default Day;