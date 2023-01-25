import styled from "styled-components";

export const PointContainer = styled.div`
    width: 100%;
    height: ${props => !props.state ? '0' : `${props.generatedHeight}px`}; 
    /* height: ${props => !props.state ? '0' : `${props.generatedHeight}px`};  */
    background-color: white;
    border-left: 5px solid rgb(251,199,87);
    border-right: 1px solid rgb(251,199,87);
    border-radius: 0 13px 13px 0;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* height: ${props => !props.state ? '0' : `${props.generatedHeight}px`};  */
`;

export const DiscriptionBox = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border: none;
    background-color: white;
`;

export const PointSetting = styled.div`
    width: 10%;
    height: 100%;
    background-color: rgb(251,199,87);
    /* padding: 5px 5px 5px; */
    border-radius: 0 15px 15px 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;