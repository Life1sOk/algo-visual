import React from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../App/slices/user.slice";

import { UserSection } from "./user-info.style";

const UserInfo = () => {
    const { userName, userPhrase } = useSelector(selectUser);

    return (
        <UserSection>
            <h2>{userName}</h2>
            <p>{userPhrase}</p>
        </UserSection>
    )
}

export default UserInfo;