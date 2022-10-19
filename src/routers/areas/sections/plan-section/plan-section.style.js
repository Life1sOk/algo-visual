import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 7px;
    border-radius: 20px;
    color: white;
    overflow: scroll;
    background-color: rgba(0,0,0, .1);
    border: 1px solid white;

    display: flex;
    ${'' /* gap: 10px; */}
`;

export const SectionOne = styled.div`
    width: 300px;
    padding: 7px;
    border-right: 2px solid rgba(255,255,102);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const SectionTwo = styled.div`
    width: 500px;
    padding: 7px;
    border-right: 2px solid rgba(255,255,102);

    display: flex;
    flex-direction: column;

    gap: 10px;  

    h2 {
        margin: 0 auto;
    }

    .block-wrapper {
        width: 100%;

        display: flex;
        justify-content: space-around;
        gap: 20px;
    }

    .block {
        width: 200px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    .desc {
        width: 100%;
        height: 100%;

        background-color: lightgreen;
    }

    .display {
        width: 484px;
        height: 300px;
        background-color: red;

        display: flex;
        gap: 10px;

        overflow: auto;
    }
`;

export const SectionThree = styled.div``;