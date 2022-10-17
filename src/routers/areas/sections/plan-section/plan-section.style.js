import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    width: 100%;
    height: 400px;
    ${'' /* background-color: rgba(0,102,255,0.5); */}
    background-color: ${props => props.mainColor};
    padding: 0 20px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
`;

export const PlanMenu = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid white;
`;