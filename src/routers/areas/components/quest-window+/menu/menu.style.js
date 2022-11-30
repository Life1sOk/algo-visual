import styled from 'styled-components';

export const PlanNavigation = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 811px;
    height: 80px;
    padding: 7px;
    background-color: rgb(0,33,66);
    border-left: 1px solid white;
    flex-shrink: 0;
    z-index: 10;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
        padding: 10px;
    }
`;

export const BigButton = styled.button`
    width: 100px;
    height: 60px;
    /* margin-bottom: 20px; */
`;