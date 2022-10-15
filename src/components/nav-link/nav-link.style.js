import styled from 'styled-components';

export const NavLinkContainer = styled.div`
    min-width: 100px;
    text-align: center;
    padding: 8px 3px 8px 3px;
    cursor: pointer;

    border-bottom: ${props => props.active ? '3px solid rgb(255, 98, 0)' : 'none'};
`;
