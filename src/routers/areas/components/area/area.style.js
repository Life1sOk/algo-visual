import styled from 'styled-components';

export const AreaContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100px;
    padding: 14px 29px 14px 29px;
    background-color: ${props => props.color};
    border: 3px solid ${props => props.current ? 'rgb(255, 98, 0)' : 'white'};
    border-radius: 30px;
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;
        border: 3px solid rgb(255, 98, 0);
    }

    .arrow {
        width:40px;

        position: absolute;
        right: -22px;
        top: calc(50% - width /2);
    }
`;

export const AreaIcon = styled.img`
    width: 70px;
`;