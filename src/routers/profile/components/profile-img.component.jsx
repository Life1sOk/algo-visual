import React from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";
import { selectUser } from "../../../App/slices/user.slice";

//----------------- Styled ---------------------//
const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 30%;
`;
//----------------------------------------------//

const ProfileImg = () => {
    const { userImage } = useSelector(selectUser)

    return (
        <Img alt="logo" src={userImage} />
    )
}

export default ProfileImg;