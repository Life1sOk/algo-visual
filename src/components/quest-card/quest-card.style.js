import styled from 'styled-components';

export const QuestCardContainer = styled.div`
    width: 322px;
    background-color: white;
    border: 3px solid ${props => props.color};
    border-radius: 20px;
    overflow: hidden;
    padding-bottom: 18px;
`;

export const QuestTitle = styled.h2`
    background-color: ${props => props.color};
    height: 40px;
    color: white;
    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
`;