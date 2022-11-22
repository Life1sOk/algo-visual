import styled from 'styled-components';

export const QuestPointsConteiner = styled.div`
    display: flex;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`; 

export const QuestPointsDisplay = styled.div`
    width: 275px;
    height: 315px;
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 17px;

    overflow: scroll;
`;

export const PointsBallContainer = styled.div`
    padding-top: 10px;

    display: flex;
    flex-direction: column;
`;

export const PointBall = styled.div`
    width: 25px;
    height: 25px;
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 50%;
    margin: 10px 5px 0 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;