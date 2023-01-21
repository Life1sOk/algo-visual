import React, { useEffect, useState, memo } from "react";

import { useSelector } from "react-redux";
import { selectActiveDay, selectNextDay, selectCalendarDays } from "../../../App/slices/daily.slice";

import { OneDay } from './day.style';

const Day = memo(({day, currentDayHandler, later, type}) => {
    const { currentMonth, selected, number, month, year } = day;
    
    const allDays = useSelector(selectCalendarDays);
    const currentActiveDay = useSelector(selectActiveDay);
    const nextPlanDay = useSelector(selectNextDay);

    const [ activeByUser, setActiveByUser ] = useState(false);
    const [ laterDay, setLaterDay ] = useState(false);
    const [ nextDay, setNextDay ] = useState(false);
    const [ plannedDay, setPlannedDay ] = useState(false);

    const dayActivateHandler = () => {
        if(!laterDay) currentDayHandler(day)
    };
    
    useEffect(() => {
        if(later) {
            let laterTrue = ((month + 1) * 100 + number < (new Date().getMonth() + 1) * 100 + new Date().getDate());
    
            if(laterTrue) setLaterDay(laterTrue);
            if(!laterTrue) setLaterDay(false);
        }
    }, [month, number, later]);

    useEffect(() => {
        if( type === 'main' && currentActiveDay.number === number && currentActiveDay.month === month && currentActiveDay.year === year) {
           return setActiveByUser(true);
        }
        
        setActiveByUser(false);
    }, [currentActiveDay, month, number, year, type]);

    useEffect(() => {
        if( type === 'planner' && nextPlanDay.number === number && nextPlanDay.month === month && nextPlanDay.year === year ) {
            return setNextDay(true);
        }
        setNextDay(false);

    }, [nextPlanDay, month, number, year, type]);

    useEffect(() => {
        for( let i=0; i < allDays?.length; i++) {
            if(allDays[i].day === number && allDays[i].month === month && allDays[i].year === year) {
               return setPlannedDay(true);
            }
            setPlannedDay(false)
        }
    }, [allDays, number, month, year]);

    return(
        <OneDay currentMonth={currentMonth} selected={selected} plannedDay={plannedDay} laterDay={laterDay} nextDay={nextDay} onClick={dayActivateHandler} activeByUser={activeByUser}>
            <p>{number}</p>
        </OneDay>
    )
})

export default Day;