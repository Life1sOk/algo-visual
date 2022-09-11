import React from "react";

import foto from '../../asset/ai mechanic2_RF_RMPL-01.svg';
import './profile.container.style.scss';

const ProfileContainer = () => {
    return (
        <aside className="profile-container">
            <img className="profile-foto" alt="profile-foto" src={foto} />
            <div className="user-info">user-info</div>
            <div className="profile-section">section one</div>
            <div className="profile-section">section two</div>
        </aside>
    )
}

export default ProfileContainer;