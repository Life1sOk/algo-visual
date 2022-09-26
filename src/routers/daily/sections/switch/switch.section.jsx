import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectFixPlan, selectFixOutOfPlan } from "../../../../App/slices/tomorrow-red.slice";

import QuestCard from "../../components/quest-card/quest-card.component";
import { Yellow } from './switch.style';
import Switcher from "../../components/switcher/switcher.component";

const colors = {
    red: 'rgb(224, 62, 26)',
    purple: 'rgb(138, 56, 245)',
    orange: 'rgb(255, 153, 51)',
}

const SwitchSection = () => {
    const questsFix = useSelector(selectFixPlan);
    const questsFixOut = useSelector(selectFixOutOfPlan);
    const [display, setDisplay] = useState('main');

    return (
        <>
            <Switcher setDisplay={setDisplay} colors={colors} />
            {
                display === 'main' ?
                    <QuestCard title='Will need to do!' color={colors.red} quests={questsFix} type='main' /> :
                    display === 'out' ?
                        <QuestCard title='Others need to do!' color={colors.purple} quests={questsFixOut} type='out' /> :
                        display === 'notes' ?
                            <Yellow>Notes</Yellow> : null
            }
        </>
    )
}

export default SwitchSection;