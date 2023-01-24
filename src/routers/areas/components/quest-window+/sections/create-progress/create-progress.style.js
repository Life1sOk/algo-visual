import styled from 'styled-components';

export const PlanNavigation = styled.div`
    /* width: 811px; */
    height: 100%;
    padding: 7px;
    /* border-top: 1px solid white; */
    background-color: rgb(6,34,60);
    border-radius: 0 0 20px 20px;
    flex-shrink: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;

    h2 {
        padding: 10px;
    }
`;

export const BigButton = styled.button`
    width: 100px;
    height: 60px;
`;