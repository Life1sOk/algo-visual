import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const CenterLayout = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//----------------------------------------------//

const CenterLayoutContainer = ({ children }) => {
    return (
        <CenterLayout>{children}</CenterLayout>
    )
}

export default CenterLayoutContainer;