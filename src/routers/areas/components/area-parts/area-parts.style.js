import styled from 'styled-components';

export const AreaPartContainer = styled.div`
    width: 100%;
    margin-top: 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
`;

export const CurrentPart = styled.div`
    width: 100%;
    height: 70px;
    border: 3px solid initial;
    margin-bottom: 10px;
    background-color: rgba(0, 102, 255, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 3px solid white;
        cursor: pointer;
    }
`;