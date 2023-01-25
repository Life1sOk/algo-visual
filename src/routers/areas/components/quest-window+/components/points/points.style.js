import styled from "styled-components";

export const PointsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px;
    /* border: 1px solid white; */
    background-color: rgb(20,25,50);
    overflow-y: scroll;

    box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;
    -webkit-box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;
    -moz-box-shadow: 0px 0px 36px 2px rgb(0,0,0) inset;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;