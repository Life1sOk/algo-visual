import React from "react";

import './profile-page.style.scss';
import ProfileContainer from "../../layouts/aside/aside-layout";
import DisplayContainer from "../../layouts/main/main-layout";

const ProfilePage = () => {
    return (
        <div className="main-page-container">
            <ProfileContainer />
            <DisplayContainer />
        </div>
    )
}

export default ProfilePage;