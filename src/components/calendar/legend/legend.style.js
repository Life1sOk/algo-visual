import styled from "styled-components";

export const LegendContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

export const LegendBox = styled.div`
    width: 13px;
    height: 13px;
    border: 2px solid ${({border}) => border ? border : 'initial'};
    border-radius: 20%;
    background-color: ${({background}) => background ? background : 'white'};
`;

export const LegendTitle = styled.span`
    font-size: 14px;
`;