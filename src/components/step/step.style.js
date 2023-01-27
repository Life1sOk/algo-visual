import styled from "styled-components";

export const StepContainer = styled.div`
    position: relative;
    width: 170px;
    flex-shrink: 0;
    text-align: center;
    border-radius: 12px;
    border-bottom: ${props => props.active ? '3px solid rgb(255,98,0)' : '3px solid rgb(86,0,173)'};
    color: ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    transition: all .2s linear;

    ${({show}) => show ? 
        `
        &:hover {
            cursor: pointer;
            transform: scale(1.025);
            box-shadow: 1px 0px 27px -6px rgb(255,98,0);
            -webkit-box-shadow: 1px 0px 27px -6px rgb(255,98,0);
            -moz-box-shadow: 1px 0px 27px -6px rgb(255,98,0);
        }`
        : 'null'
    }

    ${({active}) => active ? 
        `
        &::after {
        content: '';
        width: 20px;
        height: 10px;
        background-color: rgb(255,98,0);

        position: absolute;
        right: -20px;
        top: 50%;

        box-shadow: 1px 0px 47px -6px rgb(255 153 90);
        -webkit-box-shadow: 10px 0px 10px 5px rgb(255 153 90);
        -moz-box-shadow: 1px 0px 27px -6px rgb(255 153 90);
        }`
        : 'null'
    }
`;

export const StepDescription = styled.div`
    width: 100%;
    height: 59px;
    padding: 5px;
    font-size: 13px;
    font-style: italic;
    background-color: white;
    border-radius: 0 0 12px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StepDescriptionWrapper = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;

export const StepDeadline = styled.div`
    width: 100%;
    height: 21px;
    font-size: 12px;
    border-top: 2px solid ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    border-radius: 12px 12px 0 0;
    padding: 3px;
    background-color: ${props => props.active ? 'rgb(255,98,0)' : 'rgb(86,0,173)'};
    color: white;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: -7px;
    right: 0;
`;