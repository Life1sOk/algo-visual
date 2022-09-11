import React from "react";

import './main.page.style.scss';
import ProfileSection from "../../sections/profile/profile.section";
import DisplaySection from "../../sections/display/display.section";

const MainPage = () => {
    return (
        <div className="main-page-container">
            <ProfileSection />
            <DisplaySection />
        </div>
    )
}

export default MainPage;