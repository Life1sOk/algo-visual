import React from "react";

import { createUserWithEaP } from '../../utils/firebase';

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
        </CenterLayoutContainer>
    )
}

export default AuthorizationPage;