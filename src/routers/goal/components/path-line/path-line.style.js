import styled from "styled-components";

export const PathLineContainer = styled.span`
    /* width: 100%; */
    margin-top: 2px;

    display: flex;
    align-items: center;
    /* gap: 5px; */
`;

export const PathLineMark = styled.span`
    font-size: 16px;

    color: ${({type}) => (
        type === 'Pros' ? 'rgb(0,255,0)' :
        type === 'Cons' ? 'rgb(255,0,0)' :
        type === 'Tools' ? 'rgb(255,255,0)' : null
    )};
`;

export const PathLineStyle = styled.span`
    width: 170px;
    height: 100%;
    padding: 2px;
    color: rgb(86,0,173);
    background-color: rgba(255,255,255);
    font-size: 14px;
    margin-left: 5px;
    margin-right: 13px;
    text-align: center;
    /* border-bottom: 1px solid ${({type}) => (
        type === 'Pros' ? 'rgb(0,255,0)' :
        type === 'Cons' ? 'rgb(255,0,0)' :
        type === 'Tools' ? 'rgb(255,255,0)' : null
    )};; */
    border-radius: 3px;
`;