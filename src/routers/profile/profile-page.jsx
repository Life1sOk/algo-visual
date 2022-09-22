import React from "react";

// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// ------------- React's Common Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";

// ------------ React's Page Components ----------------- //
import ProfileImg from "./components/profile-img.component";
import UserInfo from "./components/user-info.component";
import DailyDisplay from "./components/daily-display.component";
import GoalsDisplay from "./components/goals-display.component";

// ------------- Lego --------------- //
const ProfilePage = () => {
    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <ProfileImg />
                <UserInfo />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
                <DailyDisplay />
                <GoalsDisplay />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default ProfilePage;