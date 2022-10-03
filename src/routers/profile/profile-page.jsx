import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getDailyInitialData } from '../../App/slices/daily.slice.js';
import { getOutInitialData } from "../../App/slices/out-plan.slice";


// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// ------------- Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";

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
    }, [dispatch, current]);

    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <ProfileImg />
                <UserInfo />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
                <MainDisplaySection />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default ProfilePage;