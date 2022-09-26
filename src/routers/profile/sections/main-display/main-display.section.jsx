import React from "react";

import { useSelector } from "react-redux";
import { selectTomorrow, selectOutOfPlan } from '../../../../App/slices/tomorrow-red.slice';

import { DisplaySection } from './main-display.style';
import QuestCard from "../../components/quest-card/quest-card.component";

const MainDisplaySection = () => {
    const tomorrowQuests = useSelector(selectTomorrow);
    const outOfPlan = useSelector(selectOutOfPlan);

    return (
        <DisplaySection>
            <QuestCard title='Today' color='rgb(224, 62, 26)' quests={tomorrowQuests} />
            <QuestCard title='Out plan' color='rgb(138, 56, 245)' quests={outOfPlan} />
        </DisplaySection>
    )
}

export default MainDisplaySection;