import styled from 'styled-components';

export const PointsWrapper = styled.div`
    transform-style: preserve-3d;
    transform: ${props => !props.activate ? 'rotateX(0deg)' : 'rotateX(180deg)'};
    transition: transform 0.4s ease-in-out;
`;

export const PointsContainer = styled.div`
    position: relative;
    width: 300px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    background-color: white;
    border: ${props => props.status ? '5px solid lightgreen' : '5px solid blue'};

    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
`;

export const PointBack = styled.div`
    width: 300px;
    height: 130px;
    color: white;
    background-color: blue;
    border-radius: 12px;
    transform: translateZ( -.1px) rotateX(180deg);

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PointsTitle = styled.span`
    width: 100%;
    font-size: 20px;
    padding: 4px 20px;
    background-color: blue;
`;

export const PointsDate = styled.span`
    font-size: 14px;
    padding: 3px;
    border-bottom: 1px solid blue;
    color: blue;
    margin: 0 10px;
`;

export const Main = styled.span`
    padding: 5px;
    margin: auto 0;
    font-size: 16px;
    font-style: italic;
    background-color: initial;
    text-align: center;
    color: blue;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;