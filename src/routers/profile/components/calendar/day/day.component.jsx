import React, { useEffect, useState, memo } from "react";

import { useSelector } from "react-redux";
import { selectCurrantDay } from "../../../../../App/slices/daily.slice";

import { OneDay } from './day.style';

const Day = memo(({day, currentDayHandler}) => {
    const currentDayDisplay = useSelector(selectCurrantDay);

    const { currentMonth, selected, number, month, year } = day;
    const [activeByUser, setActiveByUser] = useState(false);

    useEffect(() => {
        if(selected) currentDayHandler(day, true);
    }, []);

    useEffect(() => {
        if(currentDayDisplay.number === number && currentDayDisplay.month === month && currentDayDisplay.year === year) {
            return setActiveByUser(true);
        } else {
            return setActiveByUser(false);
        }
    }, [currentDayDisplay]);


    return(
        <OneDay currentMonth={currentMonth} selected={selected} onClick={() => currentDayHandler(day)} activeByUser={activeByUser}>
            <p>{number}</p>
        </OneDay>
    )
})

export default Day;