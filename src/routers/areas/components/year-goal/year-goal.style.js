import styled from 'styled-components';

export const YearGoalContainer = styled.div`
    width: 322px;
    border: 10px solid rgb(0,128,255);
    border-radius: 20px;
    background-color: rgba(0,128,255, .35);
    overflow: hidden;
`;

export const GoalItemTime = styled.div`
    width: 100%;
    max-height: 70px;
    background-color: coral;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const GoalItemMain = styled.div`
    min-height: 300px;
`;

export const YearGoalTitle = styled.h3`
    text-align: center;
    height: auto;
    background-color: ${props => props.color};
    padding: 5px 0 10px 0;
`;