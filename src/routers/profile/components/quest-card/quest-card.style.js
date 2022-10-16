import styled from 'styled-components';

export const QuestCardContainer = styled.div`
    position: relative;
    width: 322px;
    height: auto;
    background-color: white;
    ${'' /* border: 3px solid ${props => props.color}; */}
    border-radius: 20px;
    overflow: hidden;
`;

export const QuestTitle = styled.h2`
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressBar = styled.div`
   text-align: center;

    margin: 10px 0;
`;