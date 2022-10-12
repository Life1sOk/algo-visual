import styled from 'styled-components';

export const QuestCardWrapper = styled.div`
    transform-style: preserve-3d;
    transform: ${props => !props.cardReady ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    transition: transform 0.4s ease-in-out;
`;

export const QuestCardContainer = styled.div`
    width: 322px;
    height: auto;
    background-color: white;
    border: 3px solid ${props => props.color};
    border-radius: 20px;
    overflow: hidden;
`;

export const QuestCardBack = styled.div`
    width: 322px;
    height: 100%;
    color: white;
    background-color: ${props => props.color};
    border-radius: 20px;
    transform: translateZ( -.1px) rotateY(180deg);

    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const QuestTitle = styled.h2`
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const QuestFooter = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2,1fr);
`;