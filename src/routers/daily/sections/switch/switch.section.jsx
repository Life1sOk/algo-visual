import React, { useState } from "react";
//Firebase:
import { setUsersDatasDaily } from "../../../../utils/firebase/firebase";
//Redux:
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectFixPlan, drainDaily, selectSecondaryFixPlan, selectCurrantDay } from "../../../../App/slices/daily.slice";
//Components:
import DailyCard from "../../components/daily-card+/index";
import { Yellow, SwitchWrapper, Setting } from './switch.style';
import Switcher from "../../components/switcher/switcher.component";
import Calendar from "../../../profile/components/calendar";

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

    const currentDay = useSelector(selectCurrantDay);
    const { month, number, year } = currentDay;

    const [display, setDisplay] = useState('main');
    const [ window, setWindow ] = useState(false);

    const addDatasDailyServer = async () => await setUsersDatasDaily(uid, questsFix, 'main');
    const addDatasOutDailyServer = async () => await setUsersDatasDaily(uid, questSecodnary, 'secondary');

    const drainDatas = (type) => dispatch(drainDaily({type}));

    const windowHandler = () => setWindow(!window);

    return (
        <SwitchWrapper>
            <Setting>
                <div>Day for: </div>
                <div onClick={windowHandler}>&#10003;</div>
                {
                    window && 
                    <Calendar later window/>
                }
            </Setting>
            <Switcher setDisplay={setDisplay} colors={colors} />
            {
                display === 'main' ?
                    <DailyCard title='Will need to do!' color={colors.red} quests={questsFix} type='main'
                        addDatasServer={addDatasDailyServer} drainDatas={drainDatas} /> :
                    display === 'secondary' ?
                        <DailyCard title='Others need to do!' color={colors.purple} quests={questSecodnary} type='secondary'
                            addDatasServer={addDatasOutDailyServer} drainDatas={drainDatas} /> :
                        display === 'notes' ?
                            <Yellow>Notes</Yellow> : null
            }
        </SwitchWrapper>
    )
}

export default SwitchSection;