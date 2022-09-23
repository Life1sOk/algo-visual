import styled from 'styled-components';

export const QuestCardContainer = styled.div`
    position: relative;
    width: 322px;
    height: auto;
    background-color: white;
    border: 3px solid ${props => props.color};
    border-radius: 20px;
    overflow: scroll;
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

export const ProgressBar = styled.div`
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;

    margin: 10px 0px 10px 0px;
`;