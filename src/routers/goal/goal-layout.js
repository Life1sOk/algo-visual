import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 95%;
    padding: 15px;
    color: white;
    border: 1px solid white;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const GridTwoWrapper = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 20px;
`;