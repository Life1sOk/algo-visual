import styled from 'styled-components';

export const AreaContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100px;
    padding: 14px 29px 14px 29px;
    background-color: ${props => props.color};
    border: 3px solid ${props => props.current ? 'white' : props.color};
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;
        border: 3px solid white;
    }
`;

export const AreaIcon = styled.img`
    width: 70px;
`;