import styled from "styled-components";

export const OneDay = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    border: 2px solid ${props => props.activeByUser ? 'rgb(255,98,0)' : props.nextDay ? 'rgb(127,0,255)' : 'black'};
    border-radius: 30%;
    color: ${props => props.plannedDay ? 'white' : props.currentMonth ? 'black' : 'grey'};
    background-color: ${props => props.plannedDay === 'completed' ? 'rgb(128, 255, 0)' : props.failed ? 'rgb(255,51,51)' : props.selected ? 'rgb(255,98,0)' : props.plannedDay === 'planned' ? 'rgb(127,0,255)' : !props.currentMonth ? 'none' : 'white'};
    opacity: ${props => props.laterDay ? '.6' : null};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: ${props => props.laterDay ? null : 'pointer'};
    }
`;

export const LegendStar = styled.span`
    position: absolute;
    top: -3px;
    right: -3px;

    width: 10px;
    height: 10px;
    background-color: rgb(138,56,245);
    border-radius: 50%;
`;