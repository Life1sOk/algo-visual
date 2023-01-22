import React, { useEffect } from "react";

import { getDailyInitialData } from "../../../../App/slices/daily.slice";
import { useSelector, useDispatch } from "react-redux";
import { selectDaily, changeStatus, selectSecondaryPlan, selectActiveDay, selectCurrentDay, selectCalendarDays } from "../../../../App/slices/daily.slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { DisplaySectionContainer, DisplaySection } from './main-display.style';
import TodoCard from "../../components/todo-card";

const MainDisplaySection = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const mainQuests = useSelector(selectDaily);
    const secondaryPlan = useSelector(selectSecondaryPlan);
    const currentDay = useSelector(selectCurrentDay);

    const activeDays = useSelector(selectCalendarDays);

    const activeDay = useSelector(selectActiveDay);
    const { number, monthStr, year } = activeDay;

    const doneTodayHandler = (id, status, type) => {
        const payload = { id, status, uid, type };
        dispatch(changeStatus(payload));
    };

    const mainToDoDone = () => {
        console.log(activeDay, 'main');
        console.log(activeDays)
    };

    const secondaryToDoDone = () => {
        console.log('secondary');
    };

    useEffect(() => {
        dispatch(getDailyInitialData({uid, calendarDay: currentDay}));
    }, [dispatch, currentDay, uid]);

    return (
        <DisplaySectionContainer>
            <p>{`${number} ${monthStr} ${year}`}</p>
            <DisplaySection>
                <TodoCard title='Main' color='rgb(224, 62, 26)' quests={mainQuests} type={'main'} doneChangeHandler={doneTodayHandler} finishDay={mainToDoDone}/>
                <TodoCard title='Secondary' color='rgb(138, 56, 245)' quests={secondaryPlan} type={'secondary'} doneChangeHandler={doneTodayHandler} finishDay={secondaryToDoDone}/>
            </DisplaySection>
        </DisplaySectionContainer>
    )
}

export default MainDisplaySection;