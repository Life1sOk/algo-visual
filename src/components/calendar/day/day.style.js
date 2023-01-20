import styled from "styled-components";

export const OneDay = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid ${props => props.activeByUser ? 'rgb(255,98,0)' : props.nextDay ? 'rgb(127,0,255)' : 'black'};
    border-radius: 30%;
    color: ${props => props.currentMonth ? 'black' : 'grey'};
    background-color: ${props => props.selected ? 'rgb(255,98,0)' : !props.currentMonth ? 'none' : 'white'};
    opacity: ${props => props.laterDay ? '.5' : null};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: ${props => props.laterDay ? null : 'pointer'};
    }
`;