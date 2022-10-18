import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    width: 100%;
    ${'' /* height: 400px; */}
    ${'' /* background-color: rgba(255,255,102, .8); */}
    padding: 7px;
    border-radius: 20px;
    color: white;
    overflow: scroll;

    display: flex;
    gap: 10px;
`;

export const SectionOne = styled.div`
    width: 300px;
    padding: 7px;
    border-right: 2px solid rgba(255,255,102);
    background-color: rgba(255,255,102, .8);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const SectionTwo = styled.div`
    width: 500px;
    ${'' /* height: 1000px; */}
    padding: 7px;
    border-right: 2px solid rgba(255,255,102);
    background-color: rgba(255,165,102, .8);

    display: flex;
    flex-direction: column;
    gap: 10px;  
`;

export const SectionThree = styled.div``;