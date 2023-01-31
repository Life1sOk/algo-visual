import styled from "styled-components";

export const PointWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`;

export const PointContainer = styled.li`
    width: 90%;
    min-height: 32px;
    color: white;
    padding: 2px 7.5px 7.5px 5px;
    border-bottom: 1px solid rgb(255 153 90);
    border-radius: 7px;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;
    align-items: flex-end;
`;

export const DiscriptionBox = styled.textarea`
    width: 100%;
    height: ${props => props.height ? `${props.height}px` : `${props.generatedHeight}px`}; 
    /* max-height: ${props => props.status ? '32px' : 'initial'}; */
    background-color: inherit;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border: none;
    color: white;
    flex-shrink: 0;
`;

export const PointSetting = styled.div`
    width: 10%;
    height: 100%;
    background-color: rgb(251,199,87);
    border-radius: 0 15px 15px 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const CheckboxWrapper = styled.div`
    margin-top: 5px;
`;