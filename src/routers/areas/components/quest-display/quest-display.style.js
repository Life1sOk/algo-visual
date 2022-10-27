import styled from 'styled-components';

export const QuestDisplayWrapper = styled.div`
    position: relative;
    margin-top: 50px;
`;

export const QuestDisplayContainer = styled.div`
    width: 1068px;
    height: 407px;
    padding: 15px;
    border-radius: 20px;
    color: white;
    background-color: rgb(20, 25, 50);
    border: 1px solid white;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
`;

export const QuestDisplayButtons = styled.div`
    position: absolute;
    top: -20px;
    right: 50px;

    border-top: 3px solid white;
    border-radius: 20px 20px 0 0;

    background-color: rgb(20, 25, 50);
    padding: 10px 20px;
    z-index: 20;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`;