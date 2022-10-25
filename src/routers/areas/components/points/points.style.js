import styled from 'styled-components';

export const PointsContainer = styled.div`
    height: 150px;
    padding: 7px;
    flex-shrink: 0;
    border: 1px solid blue;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.span`
    width: 170px;
    padding: 5px;
    font-size: 16px;
    font-style: italic;
    resize: none;
    border: none;
    border-top: 1px solid grey;
    background-color: initial;
    text-align: center;
`;