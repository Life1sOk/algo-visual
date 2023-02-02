import styled from "styled-components";

export const PathMain = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1.8fr;
    justify-items: center;
    align-items: center;
`;

export const PathForm = styled.div`
    position: relative;
    /* width: 230px; */
    height: fit-content;
    padding: 20px;
    background-color: rgb(20,25,50);
    border-top: 3px solid rgb(86,0,173);
    border-bottom: 1px solid rgb(86,0,173);
    border-radius: 13px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -webkit-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
    -moz-box-shadow: 1px 0px 27px -6px rgb(178,102,255);
`;

export const WindowsWrapper = styled.div`
    width: 100%;
    min-height: 299px;

    display: flex;
    gap: 30px;
`;

export const WindowPaths = styled.div`
    width: 699px;
    padding: 20px 10px 10px 10px;
    background-color: rgb(20,25,50);
    overflow: auto;

    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    gap: 10px;

    box-shadow: 0px 0px 26px 2px rgb(0,0,0) inset;
    -webkit-box-shadow: 0px 0px 26px 2px rgb(0,0,0) inset;
    -moz-box-shadow: 0px 0px 26px 2px rgb(0,0,0) inset;
`;

export const WindowActivePath = styled.div`
    /* width: 240px; */
    padding: 20px 5px 10px 5px;
    background-color: rgb(20,25,50);

    box-shadow: 0px 0px 10px 6px rgb(86,0,173) inset;
    -webkit-box-shadow: 0px 0px 10px 6px rgb(86,0,173) inset;
    -moz-box-shadow: 0px 0px 10px 6px rgb(86,0,173) inset;
`;