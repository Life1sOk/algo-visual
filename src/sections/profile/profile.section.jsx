import React from "react";

import foto from '../../asset/ai mechanic2_RF_RMPL-01.svg';
import './profile.section.style.scss';

const ProfileSection = () => {
    return (
        <section className="profile-section-container">
            <img className="profile-foto" alt="profile-foto" src={foto} />
            <div className="user-name"></div>
            <div className="profile-section-one"></div>
            <div className="profile-section-two"></div>
        </section>
    )
}

export default ProfileSection;