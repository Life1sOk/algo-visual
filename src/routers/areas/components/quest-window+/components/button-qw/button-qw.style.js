import styled from "styled-components";

export const ButtonQWStyle = styled.button`
    position: ${({absolute}) => absolute ? 'absolute' : 'null'};
    bottom: 10px;
    left: 50%;
    transform: ${({absolute}) => absolute ? 'translateX(-50%)' : 'null'};
    z-index: ${({zindex}) => zindex ? zindex : 'initial'};

    height: 40px;
    padding: 5px;
`;