import styled from "styled-components";

export const ButtonClassicStyle = styled.button`
    background-color: rgba(255,255,255);
    border: 1px solid ${({color}) => color ? color : 'white'};;
    color: ${({color}) => color ? color : 'white'};
    cursor: pointer;
`;