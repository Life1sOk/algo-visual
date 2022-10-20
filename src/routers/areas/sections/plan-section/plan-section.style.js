import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    position: relative;
    width: 1068px;
    height: 497px;
    padding: 7px;
    border-radius: 20px;
    color: white;
    background-color: rgba(0,0,0, .1);
    border: 1px solid white;
    overflow: hidden;

    ${'' /* display: flex; */}
    ${'' /* justify-items: space-between; */}
`;

export const PlanNavigation = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 253px;
    height: 100%;
    padding: 7px;
    border-right: 2px solid rgba(255,255,102);
    background-color: red;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;  
`;