import styled from "styled-components";

export const CalendarContainer = styled.div`
    width: 300px;
    height: 300px;
    padding: 0 10px 10px 10px;
    color: white;
`;

export const CalendarHeader = styled.div`
    /* width: 100%; */
    margin-bottom: 10px;

    text-align: center;
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