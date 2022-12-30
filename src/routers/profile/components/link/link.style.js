import styled from "styled-components";

export const LinkAnch = styled.a`
    width: 100%;
    /* height: 20px; */
    padding: 0 7px 7px 7px;
    border-bottom: 1px solid white;

    &:hover {
        cursor: pointer;
        color: rgb(255,98,0);
        border-bottom: 1px solid rgb(255,98,0);
    }
`;