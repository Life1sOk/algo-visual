import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDaily, selectDailyState, changeStatus } from "../../../../App/slices/daily.slice";
import { selectOutOfPlan, selectOutStatus, changeStatusOut } from "../../../../App/slices/out-plan.slice";
import { selectAuthUid } from "../../../../App/slices/auth.slice";

import { DisplaySection } from './main-display.style';
import TodoCard from "../../components/todo-card";

const MainDisplaySection = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const tomorrowQuests = useSelector(selectDaily);
    const stateDaily = useSelector(selectDailyState)
    const outOfPlan = useSelector(selectOutOfPlan);
    const stateOut = useSelector(selectOutStatus);

    const doneTodayHandler = (id, status) => {
        const payload = { id, status, uid };
        dispatch(changeStatus(payload));
    };

    const doneOutHandler = (id, status) => {
        const payload = { id, status, uid };
        dispatch(changeStatusOut(payload))
    };

    return (
        <DisplaySection>
            <TodoCard title='Today' color='rgb(224, 62, 26)' quests={tomorrowQuests} state={stateDaily} type={'today'} doneChangeHandler={doneTodayHandler}/>
            <TodoCard title='Out plan' color='rgb(138, 56, 245)' quests={outOfPlan} state={stateOut} type={'out'} doneChangeHandler={doneOutHandler}/>
        </DisplaySection>
    )
}

export default MainDisplaySection;