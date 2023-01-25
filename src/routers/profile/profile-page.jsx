import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getDailyInitialData, changeActivePlanDay, changeCurrentDay, getDailyInitialDataCalendar } from '../../App/slices/daily.slice.js';
import { getCombinedAreas } from '../../App/slices/combined-areas.slice';
import { getMainLinksData } from "../../App/slices/links-slice";

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- Top level React Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";

// ------------ Page's Sections ----------------- //
import MainDisplaySection from "./sections/main-display/main-display.section";
import LinksBlock from './sections/links-block/links-block.section';

// ------------ Page's React Components ----------------- //
import ProfileImg from "./components/profile-img/profile-img.component";
import UserInfo from "./components/user-info/user-info.component";
import Calendar from "../../Components/calendar";

// ------------- Lego --------------- //
const ProfilePage = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);

    //'Lq20Jf6vpTXXHXrCVSdN79qWdSJ3' - uid
    
    const checkHandler = async () => {
        console.log('checker')
    };

    const calendarDayHandler = (payload) => {
        const dataServer = { uid, calendarDay: payload };
        
        dispatch(changeActivePlanDay(payload));
        dispatch(getDailyInitialData(dataServer));
    };
    
    const calendarBuildingHandler = (payload) => {
        const dataServer = { uid, calendarDay: payload };
        dispatch(getDailyInitialDataCalendar(dataServer));

        dispatch(changeActivePlanDay(payload));
        dispatch(changeCurrentDay(payload));
    };

    useEffect(() => {
        dispatch(getCombinedAreas(uid));
        dispatch(getMainLinksData(uid));
    }, [dispatch, uid]);

    return (
        <PageLayout>
            <AsideLayout>
                <TitlePage titleName='Today toDo' />
                <Calendar legend dayHandler={calendarDayHandler} buildingHandler={calendarBuildingHandler} type={'main'} windowStatus={true}/>
                <LinksBlock />
                <UserInfo />
            </AsideLayout>
            <MainLayout>
                <MainDisplaySection />
                <button onClick={checkHandler}>Check</button>
            </MainLayout>
        </PageLayout>
    )
};

export default ProfilePage;