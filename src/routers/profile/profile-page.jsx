import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getDailyInitialData } from '../../App/slices/daily.slice.js';
import { getCombinedAreas } from '../../App/slices/combined-areas.slice';

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- Top level React Components ------------------- //

// ------------ Page's Sections ----------------- //
import MainDisplaySection from "./sections/main-display/main-display.section";
import LinksBlock from './sections/links-block/links-block.section';

// ------------ Page's React Components ----------------- //
import ProfileImg from "./components/profile-img/profile-img.component";
import UserInfo from "./components/user-info/user-info.component";

// ------------- Lego --------------- //
const ProfilePage = () => {
    const dispatch = useDispatch();
    const current = useSelector(selectAuthUid);

    useEffect(() => {
        dispatch(getDailyInitialData(current));
        dispatch(getCombinedAreas(current));
    }, [dispatch, current]);

    //'Lq20Jf6vpTXXHXrCVSdN79qWdSJ3' - uid

    const checkHandler = async () => {
    }

    return (
        <PageLayout>
            <AsideLayout>
                <ProfileImg />
                <LinksBlock />
                <UserInfo />
            </AsideLayout>
            <MainLayout>
                <MainDisplaySection />
                <button onClick={checkHandler}>Check</button>
            </MainLayout>
        </PageLayout>
    )
}

export default ProfilePage;