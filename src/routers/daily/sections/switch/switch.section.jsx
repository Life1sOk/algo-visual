import React, { useState } from "react";
//Firebase:
import { setUsersDatasDaily, setUsersDatasOutDaily } from "../../../../utils/firebase/firebase";
//Redux:
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectFixPlan, drainDaily } from "../../../../App/slices/daily.slice";
import { selectFixOutOfPlan, drainOutDaily } from "../../../../App/slices/out-plan.slice";
//Components:
import TodoCard from "../../components/daily-card/index";
import { Yellow, SwitchWrapper } from './switch.style';
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

    const addDatasDailyServer = async () => await setUsersDatasDaily(uid, questsFix);
    const addDatasOutDailyServer = async () => await setUsersDatasOutDaily(uid, questsFixOut);

    const drainDailyHandler = () => dispatch(drainDaily());
    const draitnOutDailyHandler = () => dispatch(drainOutDaily());

    return (
        <SwitchWrapper>
            <Switcher setDisplay={setDisplay} colors={colors} />
            {
                display === 'main' ?
                    <TodoCard title='Will need to do!' color={colors.red} quests={questsFix} type='main'
                        addDatasServer={addDatasDailyServer} drainDatasHandler={drainDailyHandler} /> :
                    display === 'out' ?
                        <TodoCard title='Others need to do!' color={colors.purple} quests={questsFixOut} type='out'
                            addDatasServer={addDatasOutDailyServer} drainDatasHandler={draitnOutDailyHandler} /> :
                        display === 'notes' ?
                            <Yellow>Notes</Yellow> : null
            }
        </SwitchWrapper>
    )
}

export default SwitchSection;