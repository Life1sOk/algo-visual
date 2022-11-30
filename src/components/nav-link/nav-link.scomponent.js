import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavLinkContainer } from './nav-link.style.js';

const NavLink = ({ name, to }) => {
    const [active, setActive] = useState(false);
    let { pathname } = useLocation();

    useEffect(() => {
        let currentPage = `/${name.toLowerCase()}`;

        if (pathname === currentPage || pathname.includes(currentPage)) return setActive(true);
        if (pathname !== currentPage) return setActive(false);
    }, [name, pathname]);

    return (
        <Link to={to}>
            <NavLinkContainer active={active}>{name}</NavLinkContainer>
        </Link>
    )
}

export default NavLink;