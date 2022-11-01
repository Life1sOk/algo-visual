import styled from 'styled-components';

export const QuestDisplayWrapper = styled.div`
    position: relative;
    margin-top: 50px;
`;

export const QuestDisplayContainer = styled.div`
    width: 988px;
    height: ${props => props.open ? '407px' : '82px'};
    padding: 15px;
    border-radius: 20px;
    color: white;
    background-color: rgb(20, 25, 50);
    border: 1px solid white;
    overflow: hidden;

    display: flex;
    justify-content: center;
`;

export const QuestDisplayButtons = styled.div`
    position: absolute;
    top: -20px;
    right: 50px;

    border-top: 3px solid white;
    border-radius: 20px 20px 0 0;
    background-color: rgb(20, 25, 50);
    padding: 5px 20px 0 20px;
    z-index: 20;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`;

export const QuestDisplayRoadLinks = styled.div`
    position: absolute;
    top: -20px;
    left: 0px;

    min-width: 260px;
    border-top: 3px solid white;
    border-left: 1px solid white;
    border-radius: 20px 20px 0 0;
    color: rgb(255, 98, 0);
    background-color: rgb(20, 25, 50);
    padding: 10px 15px;
    z-index: 20;

    display: flex;
    justify-content: space-between;
`;