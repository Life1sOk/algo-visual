import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDay, changeNextDay, selectNextDay } from "../../../../App/slices/daily.slice";

import { SettingContainer } from './setting.style';
import Calendar, { months } from "../../../../Components/calendar";

const SettingSection = () => {
    const dispatch = useDispatch();
    const [ window, setWindow ] = useState(false);
    
    // Take today day datas
    const todayDay = useSelector(selectCurrentDay);
    // Re-formate date and take tomorrow
    let convertTomorrow = new Date(todayDay.year, todayDay.month, todayDay.number);
    convertTomorrow.setDate(convertTomorrow.getDate() + 1);
    // Formate back
    const tomorrow = {
        year: convertTomorrow.getFullYear(),
        month: convertTomorrow.getMonth(),
        monthStr: months[convertTomorrow.getMonth()],
        number: convertTomorrow.getDate(),
    };

    // Take next plan day datas 
    const nextDay = useSelector(selectNextDay);
    const { year, monthStr, number } = nextDay;

    const calendarBuildingHandler = () => dispatch(changeNextDay(tomorrow));
    const calendarDayHandler = (payload) => {
        setWindow(!window);
        dispatch(changeNextDay(payload));
    }
    
    const windowHandler = () => setWindow(!window);

    return(
        <SettingContainer>
            <div>{`Day for: ${number} ${monthStr} ${year}`}</div>
            <div onClick={windowHandler}>&#10003;</div>
            {   
                <Calendar later window dayHandler={calendarDayHandler} buildingHandler={calendarBuildingHandler} type={'planner'} windowStatus={window}/>
            }
        </SettingContainer>
    )
}

export default SettingSection;