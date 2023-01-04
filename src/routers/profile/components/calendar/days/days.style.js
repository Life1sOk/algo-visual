import styled from "styled-components";

export const DaysContainer = styled.div`
    width: 100%;
    font-size: 14px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;
`;

export const OneDay = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 30%;
    color: ${props => props.currentMonth ? 'black' : 'grey'};
    background-color: ${props => props.selected ? 'rgb(255,98,0)' : !props.currentMonth ? 'none' : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;
`;