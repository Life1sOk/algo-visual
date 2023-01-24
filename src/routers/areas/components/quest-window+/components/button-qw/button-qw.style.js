import styled from "styled-components";

export const ButtonQWStyle = styled.button`
    position: ${({absolute}) => absolute ? 'absolute' : 'null'};
    bottom: 10px;

    width: 70px;
    height: 40px;
`;