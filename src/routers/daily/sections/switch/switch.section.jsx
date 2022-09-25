import React from "react";

import { useSelector } from "react-redux";
import { selectFixPlan } from "../../../../App/slices/tomorrow.slice";

import QuestCard from "../../components/quest-card/quest-card.component";
import './switch.style';
import Switcher from "../../components/switcher/switcher.component";

const SwitchSection = () => {
    const questsFix = useSelector(selectFixPlan);

    return (
        <>
            <Switcher />
            <QuestCard title='Will need to do!' color='rgb(224, 62, 26)' quests={questsFix} />
        </>
    )
}

export default SwitchSection;