import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const PageLayout = styled.div`
    width: 1380px;
    height: 100%;
    min-height: 1000px;
    margin: 7px auto 0 auto;

    display: flex;
`;

//----------------------------------------------//

const PageLayoutContainer = ({ children }) => {
    return (
        <PageLayout>{children}</PageLayout>
    )
}

export default PageLayoutContainer;