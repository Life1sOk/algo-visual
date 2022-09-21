import React from "react";

import './nav-layout.style.scss';

const NavLayout = ({ children }) => {
    return (
        <nav className="nav-container">
            {children}
        </nav>
    )
}

export default NavLayout;