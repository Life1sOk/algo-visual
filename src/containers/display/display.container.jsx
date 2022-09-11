import React from "react";

import './display.container.style.scss';

const DisplayContainer = () => {
    return (
        <main className="display-container">
            <div className="nav-section">nav-section</div>
            <div className="display-section">display-section</div>
            <div className="smth-section">smth-section one</div>
            <div className="smth-section">smth-section two</div>
        </main>
    )
}

export default DisplayContainer;