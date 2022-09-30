import React from "react";

import { useDispatch } from "react-redux";
import { signOutHandler } from "../../utils/firebase/firebase";

import { signInUser } from "../../App/slices/user.slice";

import './navigation.style.scss';
import NavLink from "../nav-link/nav-link.scomponent";

const Navigation = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        signOutHandler();
        dispatch(signInUser(false));
    }

    return (
        <nav className="nav-container">
            <NavLink to='/profile'>Main/Home</NavLink>
            <NavLink to='/daily'>Daily</NavLink>
            <NavLink to='/area'>Areas</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/statistic'>Statistic</NavLink>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default Navigation;