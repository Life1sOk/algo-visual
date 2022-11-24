import styled from 'styled-components';

export const PartsDisplayMainWrapper = styled.div`
    width: 100%;
    height: 360px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const PartsDisplayMainContainer = styled.div`
    width: 100%;
    /* height: 360px; */
    padding: 15px;
    border-radius: 20px;
    overflow-x: scroll;

    display: grid;
    grid-template-columns: repeat(2, 290px);
    justify-items: center;
    align-items: center;
    gap: 10px;
`;