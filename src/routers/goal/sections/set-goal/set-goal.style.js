import styled from "styled-components";

export const GoalMain = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const FrontCardContainer = styled.div`
    width: 300px;
    height: fit-content;
    padding: 15px;
    background-color: rgb(20,25,50);
    transition: all .3s linear;
    border-top: 3px solid rgb(255,98,0);
    border-bottom: 1px solid rgb(255,98,0);
    border-radius: 20px;
    
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(255,98,0);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(255,98,0);
    -moz-box-shadow: 1px 0px 27px -6px rgb(255,98,0);
`;

export const FlexBetweenWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`;