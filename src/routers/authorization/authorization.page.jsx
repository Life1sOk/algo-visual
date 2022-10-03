import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signInUser } from '../../App/slices/auth.slice';

import { createUserWithEaP, signInWithEaP, onAuthStateChangedListener, createUsersDocumentsFromAuth } from '../../utils/firebase/firebase';

// ------------- Top level - Containers / Layouts -------------- //
import CenterLayoutContainer from "../../Layouts/center-container";

// ------------- Top level React Components ------------------- //

// ------------ Page's Sections ----------------- //
import SignInSection from "./sections/sign-in/sign-in.section";

// ------------ Page's React Components ----------------- //

// ------------- Lego --------------- //
const AuthorizationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChangedListener((user) => {
            if (user) {
                createUsersDocumentsFromAuth(user);
                dispatch(signInUser({
                    loggedIn: true,
                    uid: user.uid,
                }));
                navigate('/profile');
            } else {
                console.log('no user in')
            }
        })
    }, [])

    return (
        <CenterLayoutContainer>
            <SignInSection />
            <button onClick={async () => await createUserWithEaP('123123123@gmail.com', 123123123)}>autho</button>
            <button onClick={async () => await signInWithEaP('123123123@gmail.com', 123123123)}>sign in</button>
        </CenterLayoutContainer>
    )
}

export default AuthorizationPage;