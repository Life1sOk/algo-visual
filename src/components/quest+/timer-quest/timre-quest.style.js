import styled from "styled-components";

export const QuestContainer = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'initial'};
    align-items: center;
    justify-content: center;
    gap: 14px;
`;

export const TimerWindow = styled.div`
    width: 46.15px;
    height: 33.5px;
    padding: 7px;
    /* border: 1px solid ${props => props.color}; */
    border-top: 2px solid ${props => props.color};
    border-bottom: 1px solid ${props => props.color};
    border-radius: 10px;
    background-color: rgb(20,25,50);
    /* background-color: aliceblue; */
    color: white;
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    /* box-shadow: -11px -4px 26px 2px rgb(0 0 0) inset;
    -webkit-box-shadow: 0px 0px 5px 2px rgb(0 0 0) inset;
    -moz-box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset; */
`;