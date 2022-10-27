import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    position: relative;
    width: 1068px;
    border-radius: 20px;
    color: white;
    background-color: rgba(0,0,0, .1);
    border: 1px solid white;
    height: ${props => !props.open ? '57px' : '467px'};
    overflow: hidden;
    transition: height 1.2s ease-in-out;
`;

export const PlanNavigation = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 268px;
    height: 467px;
    padding: 7px;
    background-color: rgb(0,33,66);
    border-left: 1px solid white;
    flex-shrink: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
        padding: 10px;
    }
`;

export const BigButton = styled.button`
    width: 80%;
    height: 60px;
    margin-bottom: 20px;
`;