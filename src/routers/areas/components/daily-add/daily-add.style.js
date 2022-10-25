import styled from 'styled-components';

export const DailyAddContainer = styled.div`
    width: 220px;
    height: 120px;
    flex-shrink: 0;
    border: 3px solid rgb(224,62,26);
    border-radius: 12px;
    padding: 5px;
    text-align: center;
    background-color: white;
    color: black;

    display: flex;
    flex-direction: column;
`;

export const DailyAddTitle = styled.span`
    font-size: 18px;
    padding: 5px 0 15px 0;
    overflow: scroll;
`;

export const DailyAddDescription = styled.span`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-style: italic;
    border-top: 1px solid rgb(224,62,26);

    display: flex;
    align-items: center;
    justify-content: center;
`;