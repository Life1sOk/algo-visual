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

export const QuestPoint = styled.div`
    width: 100%;
    height: 119.5px;
    padding: 5px;
    border: 1px solid white;
    text-align: center;

    p {
        padding: 5px;
    }

    .point-title {
        text-align: center;
        padding: 5px;
        font-size: 24px;
    }

    .point-description {
        font-size: 18px;
    }
`;