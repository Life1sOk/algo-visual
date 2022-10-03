import React from "react";

import { useSelector } from "react-redux";
import { selectDaily, selectDailyState } from "../../../../App/slices/daily.slice";
import { selectOutOfPlan, selectOutStatus } from "../../../../App/slices/out-plan.slice";

import { DisplaySection } from './main-display.style';
import QuestCard from "../../components/quest-card/quest-card.component";

const MainDisplaySection = () => {
    const tomorrowQuests = useSelector(selectDaily);
    const stateDaily = useSelector(selectDailyState)
    const outOfPlan = useSelector(selectOutOfPlan);
    const stateOut = useSelector(selectOutStatus);

    return (
        <DisplaySection>
            <QuestCard title='Today' color='rgb(224, 62, 26)' quests={tomorrowQuests} state={stateDaily} />
            <QuestCard title='Out plan' color='rgb(138, 56, 245)' quests={outOfPlan} state={stateOut} />
        </DisplaySection>
    )
}

export default MainDisplaySection;