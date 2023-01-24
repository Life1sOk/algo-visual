import styled from "styled-components";

export const QuestFixContainer = styled.div`
    width: 375.5px;
    height: 208.26px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.span`
    text-align: center;
    font-size: 20px;
`;

export const ButtonsContaint = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px;

    button {
        height: 30px;
    }
`;

export const StatisticContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;