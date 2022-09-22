import React from "react";
import styled from 'styled-components';

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
    return (
        <UserSection>
            <h2>Andrew Tsoy</h2>
            <p>Find your lovely phrase which motivates you to do your best every day!</p>
        </UserSection>
    )
}

export default UserInfo;