import styled from 'styled-components';

export const QuestMainContainer = styled.div`
    width: 300px;
    height: 100%;
    ${'' /* border-right: 2px solid lightgreen; */}
    color: white;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
`;

export const QuestMainTitle = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .quest-id {
        position: absolute;
        top: -5px;
        left: -5px;

        width: 45px;
        height: 45px;
        font-size: 20px;
        background-color: red;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-title {
        font-size: 30px;
    }
`;

export const QuestRoad = styled.div`
    width: 100%;
    margin-top: 20px;
    font-size: 16px;

    p {
        padding: 3px;
    }

    .label {
        font-size: 18px;
        font-weight: 900;
    }
`;