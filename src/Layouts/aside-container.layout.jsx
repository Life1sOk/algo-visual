import React from "react";
import styled from 'styled-components';

//----------------- Styled ---------------------//
const AsideLayout = styled.div`
    width: 350px;
    padding: 0 10px;
    border-right: 2px solid #30363d;

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