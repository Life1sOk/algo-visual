import styled from 'styled-components';

export const QuestPointsContainer = styled.div`
    width: 405px;
    margin-top: 10px;
    border-left: 2px solid grey;
    border-right: 2px solid grey;

    .quest-points {
        text-align: center;
        font-size: 30px;
    }
`;

export const QuestPointsDisplay = styled.div`
    margin-top: 20px;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    overflow: scroll;
`;
