import React from "react";

import NavLayout from "../../layouts/nav/nav-layout";
import './navigation.section.style.scss';
import NavLink from "../../components/nav-link/nav-link.scomponent";

const Navigation = () => {
    return (
        <NavLayout>
            <NavLink to='/'>Main/Home</NavLink>
            <NavLink to='/daily'>Daily</NavLink>
            <NavLink to='/area'>Areas</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/statistic'>Statistic</NavLink>
        </NavLayout>
    )
}

export default Navigation;