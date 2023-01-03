import styled from "styled-components";

export const LinkContainer = styled.div`
    position: relative;
    height: fit-content;
    padding: ${props => props.type === 'main' ? '6px' : '6px 25px 6px 6px'};
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    color: black;
    flex-shrink: 0;

    &:hover {
        cursor: pointer;
        color: rgb(255,98,0);
        border: 1px solid rgb(255,98,0);
    }
`;

export const LinkStyle = styled.a`   
    font-size: 14px;
    
    &:hover {
        cursor: pointer;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 50%;
    right: 2.5px;
    transform: translateY(-50%);

    width: 20px;
    height: 20px;
    border-radius: 50%;
`;