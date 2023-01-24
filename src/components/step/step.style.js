import styled from "styled-components";

export const StepContainer = styled.div`
    position: relative;
    width: 170px;
    /* height: 80px; */
    flex-shrink: 0;
    text-align: center;
    border-radius: 12px;
    background-color: white;
    border: ${props => props.status ? '5px solid green' : '5px solid rgb(86,0,173)'};
    color: rgb(86,0,173);
`;

export const StepDescription = styled.div`
    width: 100%;
    height: 59px;
    padding: 5px;
    font-size: 13px;
    font-style: italic;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StepDescriptionWrapper = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const StepDeadline = styled.div`
    width: 100%;
    height: 21px;
    font-size: 12px;
    padding: 3px;
    background-color: rgb(86,0,173);
    color: white;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: -7px;
    right: 0;
`;