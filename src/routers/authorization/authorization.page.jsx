import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { signInUser } from '../../App/slices/user.slice';

import { createUserWithEaP, signInWithEaP, signOutHandler, onAuthStateChangedListener, createUsersDocumentsFromAuth } from '../../utils/firebase/firebase';

// ------------- Top level - Containers / Layouts -------------- //
import CenterLayoutContainer from "../../Layouts/center-container";

// ------------- Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";

// ------------ Page's Sections ----------------- //
import SignInSection from "./sections/sign-in/sign-in.section";

// ------------ Page's React Components ----------------- //

// ------------- Lego --------------- //
const AuthorizationPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChangedListener((user) => {
            if (user) {
                // const uid = user.uid;
                createUsersDocumentsFromAuth(user);
                dispatch(signInUser(true))
            } else {
                console.log('no user in')
            }
        })
    }, [])

    const signOut = () => {
        dispatch(signInUser(false));
        signOutHandler();
    }

    return (
        <CenterLayoutContainer>
            <Navigation />
            <SignInSection />
            <button onClick={async () => await createUserWithEaP('123123123@gmail.com', 123123123)}>autho</button>
            <button onClick={async () => await signInWithEaP('123123123@gmail.com', 123123123)}>sign in</button>
            <button onClick={signOut}>out</button>
        </CenterLayoutContainer>
    )
}

export default AuthorizationPage;