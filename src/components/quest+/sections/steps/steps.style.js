import styled from "styled-components";

export const StepsWrapper = styled.div`
    height: 100%;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const StepsContainer = styled.div`
    position: relative;
    width: 210px;
    height: 100%;
    padding: 13px 0;
    background-color: rgb(20,25,50);
    overflow: auto;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;

    box-shadow: -11px -4px 26px 2px rgb(0 0 0) inset;
    -webkit-box-shadow: 0px 0px 5px 2px rgb(0 0 0) inset;
    -moz-box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset;
`;

export const PointsWrapper = styled.div`
    width: 100%;
    /* height: 100%; */

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const PointsContainer = styled.ul`
    min-width: 325px;
    width: 100%;
    height: 345px;
    padding: 13px 10px 10px 10px;
    background-color: rgb(20,25,50);

    box-shadow: -11px -4px 26px 2px rgb(0 0 0) inset;
    -webkit-box-shadow: 0px 0px 12px 2px rgb(0,0,0) inset;
    -moz-box-shadow: -11px -4px 26px 2px rgb(0,0,0) inset;
`;

export const AnimationWrapper = styled.div`
    width: 100%;
    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const PointsButton = styled.div`
    width: 100%;
    height: 33.5px;
    /* border: 1px solid white; */
    /* background-color: grey; */
    display: flex;
    justify-content: space-around;

    span {
        width: 46.15px;
        height: 33.5px;
        padding: 7px;
        border-top: 2px solid rgb(52,120,140);
        border-bottom: 1px solid rgb(52,120,140);
        border-radius: 10px;
        background-color: rgb(20,25,50);
        color: white;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;