import styled from "styled-components";

export const LinksBlockContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 120px;
    border-top: 2px solid #30363d;
    margin-top: 20px;
    padding: 11px;
    color: white;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const OpenWindow = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    width: 20px;
    height: 20px;
`;