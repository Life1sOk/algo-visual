import styled from 'styled-components';

export const PartsDisplay = styled.div`
    width: 100%;
    /* height: 100%; */
    padding:0 15px;
    border-radius: 20px;
    /* overflow-x: scroll; */

    display: grid;
    grid-template-columns: repeat(3, 290px);
    justify-items: center;
    align-items: center;
    gap: 10px;
`;