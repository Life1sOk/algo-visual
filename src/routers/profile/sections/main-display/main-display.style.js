import styled from 'styled-components';

export const DisplaySectionContainer = styled.div`
    width: 100%;
    color: white;
    border: 2px solid #30363d;
`;

export const DisplaySection = styled.section`
    width: 100%;
    padding: 10px;
    ${'' /* background-color: lightyellow; */}

    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px; */

    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    align-items: flex-start;
    gap: 10px;
`;