import React from "react";

import './profile-page.style.scss';
import AsideLayout from '../../layouts/aside/aside-layout';
import MainLayout from '../../layouts/main/main-layout';
import Navigation from "../../sections/navigation/navigation.section";

const ProfilePage = () => {
    return (
        <div className="main-page-container">
            <AsideLayout />
            <div className="profile-wrapper">
                <Navigation />
                <MainLayout />
            </div>
        </div>
    )
}

export default ProfilePage;