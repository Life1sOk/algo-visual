import styled from 'styled-components';

export const SwitcherContainer = styled.div`
    width: 90%;
    margin-bottom: 15px;
    ${'' /* border: 2px solid grey; */}
    ${'' /* border-radius: 10px; */}
    ${'' /* overflow: hidden; */}

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 23px;
`;

export const Button = styled.button`
    color: ${props => props.on ? 'white' : props.color};
    border: none;
    background-color: ${props => props.on ? props.color : 'white'};
    border-left: ${props => props.type === 'middle' ? '1px solid grey' : props.type === 'left' ? `2px solid ${props.color}` : null};
    border-right: ${props => props.type === 'middle' ? '1px solid grey' : props.type === 'right' ? `2px solid ${props.color}` : null};
    border-top: 2px solid ${props => props.color};
    border-bottom: 2px solid ${props => props.color};
    border-radius: ${props => props.type === 'left' ? '10px 0 0 10px' : props.type === 'right' ? '0 10px 10px 0' : null};

    &:hover {
        cursor: pointer;
    }

`;
