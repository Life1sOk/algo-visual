import styled from 'styled-components';

export const DescriptionSectionContainer = styled.div`
    margin: 27px 30px 0 30px;
    height: ${props => props.open ? '440px' : '50px'};
    transition: height 0.4s ease-in-out;
    overflow: hidden;
    border-bottom: 2px solid white;

    &:hover {
        cursor: pointer;
    }
`;

export const DescriptionTitleContainer = styled.h2`
    height: 32px;
    margin: 0 0 7px 0;
    font-size: 26px;
    text-align: center;
    color: white;
`;

export const DescriptionCurrent = styled.div`
    display: flex;
    justify-contenr: center;
    align-items: center;
`;