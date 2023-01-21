import React, { useState } from "react";
//Firebase:
import { setUsersDatasDaily } from "../../../../utils/firebase/firebase";
//Redux:
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectFixPlan, drainDaily, selectSecondaryFixPlan, selectNextDay } from "../../../../App/slices/daily.slice";
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

    const planningDayFor = useSelector(selectNextDay);
    const { year, monthStr, number, month } = planningDayFor;

    const [display, setDisplay] = useState('main');

    const addDatasDailyServer = async (type) => {
        const datas = {
            type,
            datas: type === 'main' ? questsFix : questSecodnary, 
            year, 
            month,
            monthStr,
            number
        }

        await setUsersDatasDaily(uid, datas);
    };

    // const addDatasOutDailyServer = async () => {
    //     await setUsersDatasDaily(uid, questSecodnary, 'secondary');
    // }

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