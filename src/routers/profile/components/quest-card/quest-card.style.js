import styled from 'styled-components';

export const QuestCardContainer = styled.div`
    position: relative;
    width: 272px;
    height: auto;
    background-color: white;
    border-radius: 25px;
`;

export const QuestTitle = styled.h3`
    border-radius: 20px 20px 0 0;
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressBar = styled.div`
    text-align: center;
    border-radius: 0 0 20px 20px;

    margin: 10px 0;
`;