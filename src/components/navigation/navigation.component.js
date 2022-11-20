import React from "react";
import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signOutHandler } from "../../utils/firebase/firebase";

import { signOut } from "../../App/slices/auth.slice";

import './navigation.style.scss';
import NavLink from "../nav-link/nav-link.scomponent";

const navigation = [
    {
        id: 1,
        to: '/profile',
        name: 'Profile',
    },
    {
        id: 2,
        to: '/daily',
        name: 'Daily',
    },
    {
        id: 3,
        to: '/areas',
        name: 'Areas',
    },
    {
        id: 4,
        to: '/posts',
        name: 'Posts',
    },
    {
        id: 5,
        to: '/statistic',
        name: 'Statistic',
    },
];

const Navigation = () => {
    const dispatch = useDispatch();

    const signOutHanlder = () => {
        signOutHandler();
        dispatch(signOut());
    }

    return (
        <>
            <div className="nav-wrapper">
                <div className="next-wrapper">
                    <div className="left"></div>
                    <nav className="nav-container">
                        {
                            navigation.map(link => <NavLink key={link.id} to={link.to} id={link.id} name={link.name} />)
                        }
                        <button onClick={signOutHanlder}>Sign Out</button>
                    </nav>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;