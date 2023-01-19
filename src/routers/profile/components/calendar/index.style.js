import styled from "styled-components";

export const CalendarContainer = styled.div`
    position: ${props => props.window ? 'absolute' : 'initial'};
    top: -20px;
    left: 300px;

    width: 300px;
    /* height: 300px; */
    background-color: ${props => props.window ? 'rgb(20,25,50)' : 'initial'};
    border: 2px solid ${props => props.window ? 'white' : 'initial'};
    border-radius: ${props => props.window ? '20px' : 'initial'};
    padding: 0 10px 10px 10px;
    color: white;

    z-index: ${props => props.window ? '123' : 'initial'};;
`;

export const CalendarHeader = styled.div`
    margin: 10px 0;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    h3 {
        width: 150px;
    }
`;

export const CalendarTable = styled.div`
    width: 100%;
    margin-bottom: 7px;

    display: flex;
    justify-content: center;
    gap: 7px;
`;

export const Weekday = styled.div`
    width: 30px;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Arrow = styled.span`
    font-size: 18px;
    width: 15px;

    &:hover {
        cursor: pointer;
    }

    &:active {
        color: rgb(255, 98, 0);
    }
`;

export const BlankArrow = styled.span`
    width: 15px;
    height: 100%;
`;

export const CalendarFooter = styled.div`
    margin-top: 17px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    gap: 7px;
`;