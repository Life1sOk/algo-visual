import styled from 'styled-components';

export const SlideSectionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-right: 2px solid rgba(255,255,102);
    width: 800px;
    height: 100%;
    background-color: rgb(6, 34, 60);

    display: flex;
    flex-direction: column;
    align-items: center;

    transform: ${props => props.active ? 'none' : 'translateX(1000px)'};
    transition: transform 1s ease-in-out;
`;