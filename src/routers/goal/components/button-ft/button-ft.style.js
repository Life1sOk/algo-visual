import styled from "styled-components";

export const ButtonFtStyle = styled.button`
    width: 100%;
    border: none;
    background-color: inherit;
    color: ${({color}) => color ? color : 'white'};
    border-bottom: .5px solid ${({color}) => color ? color : 'white'};
    border-radius: 20%;
    padding: 2px;

    &:hover {
        cursor: pointer;
    };

    &:active {
        opacity: .7;
    };
`;