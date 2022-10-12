import styled from 'styled-components';

export const YearGoalContainer = styled.div`
    width: 322px;
    height: 400px;
    border: 10px solid ${props => props.color};
    border-radius: 20px;
    background-color: ${props => props.color};
`;

export const YearGoalTitle = styled.h2`
    background-color: ${props => props.color};
    padding: 5px 0 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const YearGoalText = styled.textarea`
    width: 100%;
    height: 300px;
    padding: 20px;
    font-size: 16px;
    font-style: italic;
    opacity: .7;
    min-height: 110px;
    resize: none;
    border: none;
    border-top: 1px solid grey;
`;