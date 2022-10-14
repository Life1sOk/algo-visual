import styled from 'styled-components';

export const YearGoalContainer = styled.div`
    width: 322px;
    height: 400px;
    border: 10px solid ${props => props.color};
    border-radius: 20px;
    background-color: ${props => props.color};
    ${'' /* overflow: hidden; */}
`;

export const GoalItemTime = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const GoalItemMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const YearGoalTitle = styled.h3`
    max-width: 100%;
    height: auto;
    background-color: ${props => props.color};
    padding: 5px 0 10px 0;
`;