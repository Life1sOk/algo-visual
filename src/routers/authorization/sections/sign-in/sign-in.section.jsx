import React from "react";

import { SignInContainer } from './sign-in.section.style';
import AuthTitle from "../../components/auth-title/auth-title.component";

const SignInSection = () => {
    return (
        <SignInContainer>
            <AuthTitle name='Sign In' />

        </SignInContainer>
    )
}

export default SignInSection;