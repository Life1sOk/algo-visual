import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDaily, changeStatus, selectSecondaryPlan, selectActiveDay } from "../../../../App/slices/daily.slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { DisplaySection } from './main-display.style';
import TodoCard from "../../components/todo-card";

const MainDisplaySection = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const tomorrowQuests = useSelector(selectDaily);
    const secondaryPlan = useSelector(selectSecondaryPlan);

    const activeDay = useSelector(selectActiveDay);
    const { number, monthStr, year } = activeDay;

    const doneTodayHandler = (id, status, type) => {
        const payload = { id, status, uid, type };
        dispatch(changeStatus(payload));
    };

    return (
        <>
            <p>{`${number} ${monthStr} ${year}`}</p>
        <DisplaySection>
            <TodoCard title='Today' color='rgb(224, 62, 26)' quests={tomorrowQuests} type={'main'} doneChangeHandler={doneTodayHandler}/>
            <TodoCard title='Out plan' color='rgb(138, 56, 245)' quests={secondaryPlan} type={'secondary'} doneChangeHandler={doneTodayHandler}/>
        </DisplaySection>
        </>
    )
}

export default MainDisplaySection;