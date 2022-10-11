import React, { useState } from "react";

import { setUsersDatasDaily, setUsersDatasOutDaily } from "../../../../utils/firebase/firebase";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectFixPlan, drainDaily } from "../../../../App/slices/daily.slice";
import { selectFixOutOfPlan, drainOutDaily } from "../../../../App/slices/out-plan.slice";

import QuestCard from "../../components/quest-card/quest-card.component";
import { Yellow } from './switch.style';
import Switcher from "../../components/switcher/switcher.component";

const colors = {
    red: 'rgb(224, 62, 26)',
    purple: 'rgb(138, 56, 245)',
    orange: 'rgb(255, 153, 51)',
}

const SwitchSection = () => {
    const dispatch = useDispatch();
    const questsFix = useSelector(selectFixPlan);
    const questsFixOut = useSelector(selectFixOutOfPlan);
    const uid = useSelector(selectAuthUid);
    const [display, setDisplay] = useState('main');

    const addDatasDailyHandler = async () => await setUsersDatasDaily(uid, questsFix);
    const addDatasOutDailyHandler = async () => await setUsersDatasOutDaily(uid, questsFixOut);

    const drainDailyHandler = () => dispatch(drainDaily());
    const draitnOutDailyHandler = () => dispatch(drainOutDaily());

    return (
        <>
            <Switcher setDisplay={setDisplay} colors={colors} />
            {
                display === 'main' ?
                    <QuestCard title='Will need to do!' color={colors.red} quests={questsFix} type='main'
                        addDatasHandler={addDatasDailyHandler} drainDatasHandler={drainDailyHandler} /> :
                    display === 'out' ?
                        <QuestCard title='Others need to do!' color={colors.purple} quests={questsFixOut} type='out'
                            addDatasHandler={addDatasOutDailyHandler} drainDatasHandler={draitnOutDailyHandler} /> :
                        display === 'notes' ?
                            <Yellow>Notes</Yellow> : null
            }
        </>
    )
}

export default SwitchSection;