import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getDailyInitialData } from '../../App/slices/daily.slice.js';
import { getOutInitialData } from "../../App/slices/out-plan.slice";
import { getCombinedAreas } from '../../App/slices/combined-areas.slice';

import { tryUpdateData } from "../../utils/firebase/firebase";

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- Top level React Components ------------------- //

// ------------ Page's Sections ----------------- //
import MainDisplaySection from "./sections/main-display/main-display.section";

// ------------ Page's React Components ----------------- //
import ProfileImg from "./components/profile-img/profile-img.component";
import UserInfo from "./components/user-info/user-info.component";

// ------------- Lego --------------- //
const ProfilePage = () => {
    const dispatch = useDispatch();
    const current = useSelector(selectAuthUid);

    useEffect(() => {
        dispatch(getDailyInitialData(current));
        dispatch(getOutInitialData(current));
        dispatch(getCombinedAreas(current));
    }, [dispatch, current]);

    const checkHandler = async () => {
        tryUpdateData(current)
    }

    return (
        <PageLayout>
            <AsideLayout>
                <ProfileImg />
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