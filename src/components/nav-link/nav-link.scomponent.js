import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavLinkContainer } from './nav-link.style.js';

const NavLink = ({ name, to, id, status, setStatus }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (status === id) return setActive(true);
        if (status !== id) return setActive(false);
    }, [id, status]);

    const statusChangeHandler = () => setStatus(id);

    return (
        <Link to={to} onClick={statusChangeHandler}>
            <NavLinkContainer active={active}>{name}</NavLinkContainer>
        </Link>
    )
}

export default NavLink;