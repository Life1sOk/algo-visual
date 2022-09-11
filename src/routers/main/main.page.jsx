import React from "react";

import './main.page.style.scss';
import ProfileContainer from "../../containers/profile/profile.container";
import DisplayContainer from "../../containers/display/display.container";

const MainPage = () => {
    return (
        <div className="main-page-container">
            <ProfileContainer />
            <DisplayContainer />
        </div>
    )
}

export default MainPage;