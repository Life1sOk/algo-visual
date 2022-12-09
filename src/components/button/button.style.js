import styled from "styled-components";

export const  ButtonContainer = styled.button`
    width: 100%;
    height: 36.6px;
    padding: 4px;
    color: rgb(68, 61, 61);
    cursor: pointer;
    border-radius: 3px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid ${props => props.type === 'accept' ? 'rgb(51, 255, 51)' : 
                        props.type === 'fix' ? 'rgb(255,255,51)' :
                        props.type === 'delete' ? 'rgb(255,51,51)' : null};
    background-color: ${props => props.type === 'accept' ? 'rgb(51, 255, 51)' : 
                        props.type === 'fix' ? 'rgb(255,255,51)' :
                        props.type === 'delete' ? 'rgb(255,51,51)' : null};;

    &:hover {
        color: rgb(68, 61, 61);
        background-color: white;
    }
`;