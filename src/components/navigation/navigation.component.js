import React from "react";

import './navigation.style.scss';
import NavLink from "../nav-link/nav-link.scomponent";

const Navigation = () => {
    return (
        <nav className="nav-container">
            <NavLink to='/'>Main/Home</NavLink>
            <NavLink to='/daily'>Daily</NavLink>
            <NavLink to='/area'>Areas</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/statistic'>Statistic</NavLink>
            <NavLink to='/authorization'>Sign In</NavLink>
        </nav>
    )
}

export default Navigation;