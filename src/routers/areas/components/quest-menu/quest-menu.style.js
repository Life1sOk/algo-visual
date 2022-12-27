import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 10px;
`;

export const P = styled.span`
    font-size: 16px;
    color: ${props => props.active ? 'rgb(255, 98, 0)' : 'null'};

    &:hover {
        cursor: pointer;
    }
`;
