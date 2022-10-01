import React from "react";

import { useSelector } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";

import { getUsersDocs } from "../../utils/firebase/firebase";

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
    const current = useSelector(selectAuthUid);

    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <ProfileImg />
                <UserInfo />
                <button onClick={async () => await getUsersDocs(current, 'quests', 'daily')}>CheckUser</button>
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
                <MainDisplaySection />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default ProfilePage;