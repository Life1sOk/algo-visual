import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 17px;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
`;

export const ProgressCount = styled.div`
    width: ${props => `${props.progress}%`};
    height: 100%;
    background-color: rgb(51,255,51);

    transition: width .7s linear;
`;

export const ProgressBarTitle = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 13px;
    font-weight: bold;
`;