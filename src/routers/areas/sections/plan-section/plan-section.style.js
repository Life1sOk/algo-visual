import styled from 'styled-components';

export const PlanSectionContainer = styled.div`
    position: relative;
    width: 1068px;
    height: 497px;
    border-radius: 20px;
    color: white;
    background-color: rgba(0,0,0, .1);
    border: 1px solid white;
    overflow: hidden;
`;

export const PlanNavigation = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 268px;
    height: 100%;
    padding: 7px;
    background-color: rgb(0,33,66);
    border-left: 1px solid white;
    flex-shrink: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${'' /* gap: 10px;   */}

    h2 {
        padding: 10px;
    }
`;

export const NavButton = styled.span`
    width: 80%;
    text-align: center;
    font-size: 22px;
    padding: 5px;
    margin: 10px 0;
    border-right: 1px solid ${props => props.active ? 'rgb(255, 98, 0)' : 'white'};
    border-left: 1px solid ${props => props.active ? 'rgb(255, 98, 0)' : 'white'};
    color: ${props => props.active ? 'rgb(255, 98, 0)' : 'white'};

    &:hover {
        cursor: pointer;
    }
`;

export const BigButton = styled.button`
    width: 80%;
    height: 60px;

    margin-bottom: 20px;
`;