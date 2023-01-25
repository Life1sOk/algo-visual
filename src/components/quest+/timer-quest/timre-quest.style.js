import styled from "styled-components";

export const QuestContainer = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'initial'};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const TimerWindow = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid orangered;
    border-radius: 10px;
    background-color: aliceblue;
    color: orangered;
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
`;