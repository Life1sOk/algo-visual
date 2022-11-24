import styled from 'styled-components';

const DailyStyle = styled.div`
    transform-style: preserve-3d;
    transform: ${props => !props.cardReady ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    transition: transform 0.4s ease-in-out;
`;

const DailyCardContainer = styled.div`
    width: 292px;
    height: auto;
    background-color: white;
    border-bottom: 3px solid ${props => props.color};
    border-radius: 20px;
    overflow: hidden;
`;

const DailyCardBackSide = styled.div`
    width: 292px;
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

const DailyCardTitle = styled.h3`
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const DailyCardButtons = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2,1fr);
`;

DailyStyle.Container = DailyCardContainer;
DailyStyle.Backside = DailyCardBackSide;
DailyStyle.Title = DailyCardTitle;
DailyStyle.Buttons = DailyCardButtons;


export default DailyStyle;