import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const MainLayout = styled.div`
    width: 100%;
    padding: 0 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

//----------------------------------------------//

const MainLayoutContainer = ({ children }) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default MainLayoutContainer;