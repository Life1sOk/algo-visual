import styled from "styled-components";

export const LinkWindowContainer = styled.div`
    width: 600px;
    /* height: 400px; */
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgb(64,64,64);
    color: white;

`;

export const WindowTitle = styled.h3`
    padding: 20px 20px 16px;
`;

export const LinksWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ButtonsContainer = styled.div`
    padding: 24px 16px 16px;

    display: flex;
    justify-content: flex-end;

    button {
        width: 73.32px;
        height: 32px;
        margin-right: 10px;
    }
`;