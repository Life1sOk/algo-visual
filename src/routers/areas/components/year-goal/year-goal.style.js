import styled from 'styled-components';

export const YearGoalContainer = styled.div`
    width: 322px;
    height: 400px;
    border: 10px solid ${props => props.color};
    border-radius: 20px;
    background-color: white;
`;

export const YearGoalTitle = styled.h2`
    background-color: ${props => props.color};
    padding: 5px 0 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;