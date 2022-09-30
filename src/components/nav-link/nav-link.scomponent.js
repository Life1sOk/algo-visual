import React from "react";
import { Link } from "react-router-dom";

import './nav-link.style.scss';

const NavLink = ({ children, to, ...others }) => {
    return (
        <Link to={to}>
            <span className="nav-link" {...others}>{children}</span>
        </Link>
    )
}

export default NavLink;