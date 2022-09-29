import React from "react";

import { AuthTitleContainer } from './auth-title.style';

const AuthTitle = ({ name }) => {
    return (
        <AuthTitleContainer>{name}</AuthTitleContainer>
    )
}

export default AuthTitle;