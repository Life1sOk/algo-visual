import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const PageLayout = styled.div`
    width: 100%;
    width: 1280px;
    height: 100%;
    height: 1500px;
    background-color: rgb(240, 194, 240);
    margin: 20px auto 0 auto;

    display: flex;
`;

//----------------------------------------------//

const PageLayoutContainer = ({ children }) => {
    return (
        <PageLayout>{children}</PageLayout>
    )
}

export default PageLayoutContainer;