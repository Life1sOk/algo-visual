import styled from 'styled-components';

export const PartsDisplayMainContainer = styled.div`
    width: 100%;
    height: 350px;
    padding: 15px;
    border-radius: 20px;
    overflow: scroll;

    display: grid;
    grid-template-columns: repeat(2, 290px);
    justify-items: center;
    align-items: center;
    gap: 10px;
`;