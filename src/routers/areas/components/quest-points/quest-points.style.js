import styled from 'styled-components';

export const QuestPointsContainer = styled.div`
    width: 465px;

    .quest-points {
        text-align: center;
        font-size: 30px;
        padding-bottom: 4px;
    }
`;

export const QuestPointsDisplay = styled.div`
    width: 100%;
    height: calc(100% - 56.5px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 15px;

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