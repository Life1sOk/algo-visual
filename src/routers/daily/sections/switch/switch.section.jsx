import React, { useState } from "react";

//Redux:
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectFixPlan, drainDaily, selectSecondaryFixPlan, addQuestsServer } from "../../../../App/slices/daily.slice";
//Components:
import DailyCard from "../../components/daily-card+/index";
import { Yellow, SwitchWrapper } from './switch.style';
import Switcher from "../../components/switcher/switcher.component";

const colors = {
    red: 'rgb(224, 62, 26)',
    purple: 'rgb(138, 56, 245)',
    orange: 'rgb(255, 153, 51)',
}

const SwitchSection = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const questsFix = useSelector(selectFixPlan);
    const questSecodnary = useSelector(selectSecondaryFixPlan);

    const [display, setDisplay] = useState('main');

    const addDatasDailyServer = async (type) => {
        const payload = { type, uid };

        dispatch(addQuestsServer(payload));
    };

    const drainDatas = (type) => dispatch(drainDaily({type}));

    return (
        <SwitchWrapper>
            <Switcher setDisplay={setDisplay} colors={colors} />
            {
                display === 'main' ?
                    <DailyCard title='Will need to do!' color={colors.red} quests={questsFix} type='main'
                        addDatasServer={addDatasDailyServer} drainDatas={drainDatas} /> :
                    display === 'secondary' ?
                        <DailyCard title='Others need to do!' color={colors.purple} quests={questSecodnary} type='secondary'
                            addDatasServer={addDatasDailyServer} drainDatas={drainDatas} /> :
                        display === 'notes' ?
                            <Yellow>Notes</Yellow> : null
            }
        </SwitchWrapper>
    )
}

export default SwitchSection;