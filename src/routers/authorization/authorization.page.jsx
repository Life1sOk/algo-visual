import React from "react";

import { createUserWithEaP, signInWithEaP, signOutHandler } from '../../utils/firebase';

// ------------- Top level - Containers / Layouts -------------- //
import CenterLayoutContainer from "../../Layouts/center-container";

// ------------- Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";

// ------------ Page's Sections ----------------- //
import SignInSection from "./sections/sign-in/sign-in.section";

// ------------ Page's React Components ----------------- //

// ------------- Lego --------------- //
const AuthorizationPage = () => {
    return (
        <CenterLayoutContainer>
            <Navigation />
            <SignInSection />
            <button onClick={async () => await createUserWithEaP('123123123@gmail.com', 123123123)}>autho</button>
            <button onClick={async () => await signInWithEaP('123123123@gmail.com', 123123123)}>sign in</button>
            <button onClick={signOutHandler}>out</button>
        </CenterLayoutContainer>
    )
}

export default AuthorizationPage;