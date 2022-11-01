import styled from 'styled-components';

export const DailyAddWrapper = styled.div`
    transform-style: preserve-3d;
    transform: ${props => !props.activate ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    transition: transform 0.4s ease-in-out;
`;

export const DailyAddContainer = styled.div`
    position: relative;
    width: 220px;
    height: 120px;
    flex-shrink: 0;
    border: 3px solid rgb(224,62,26);
    border-radius: 12px;
    ${'' /* padding: 5px; */}
    text-align: center;
    background-color: white;
    color: black;

    display: flex;
    flex-direction: column;

    &:hover {
        cursor: ${props => props.hover ? 'pointer' : 'initial'};
    }
`;

export const DailyAddBack = styled.div`
    width: 220px;
    height: 120px;
    color: white;
    background-color: rgb(224,62,26);
    border-radius: 12px;
    transform: translateZ( -.1px) rotateY(180deg);

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

export const DailyAddTitle = styled.span`
    font-size: 18px;
    padding: 5px 0 10px 0;
    overflow: scroll;
`;

export const DailyAddDescription = styled.span`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-style: italic;
    border-top: 1px solid rgb(224,62,26);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 3px;
`;