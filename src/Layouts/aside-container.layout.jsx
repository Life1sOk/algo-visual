import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const AsideLayout = styled.div`
    width: 20%;
    border-right: 2px solid green;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

//----------------------------------------------//

const AsideLayoutContainer = ({ children }) => {
    return (
        <AsideLayout>{children}</AsideLayout>
    )
}

export default AsideLayoutContainer;