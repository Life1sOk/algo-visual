import React from "react";
import { Link } from "react-router-dom";

import './nav-link.style.scss';

const NavLink = ({ children, to }) => {
    return (
        <Link to={to}>
            <span className="nav-link">{children}</span>
        </Link>
    )
}

export default NavLink;