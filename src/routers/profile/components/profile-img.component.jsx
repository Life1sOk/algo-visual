import React from "react";
import styled from 'styled-components';

import logo from '../assets/ai mechanic2_RF_RMPL-01.svg';

//----------------- Styled ---------------------//
const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 30%;
`;
//----------------------------------------------//

const ProfileImg = () => {
    return (
        <Img alt="logo" src={logo} />
    )
}

export default ProfileImg;