import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const MainLayout = styled.div`
    width: 80%;
`;

//----------------------------------------------//

const MainLayoutContainer = ({ children }) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default MainLayoutContainer;