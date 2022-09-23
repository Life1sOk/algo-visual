import React from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { selectUser } from "../../../App/slices/user.slice";

//----------------- Styled ---------------------//
const UserSection = styled.section`
    width: 100%;
    background-color: lightgreen;
    padding: 11px;
    margin-top: 20px;
    text-align: initial;
`;
//----------------------------------------------//

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