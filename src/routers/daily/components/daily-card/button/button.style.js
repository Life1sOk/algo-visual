import styled from 'styled-components';

export const ButtonStyle = styled.button`
    min-width: 50px;
    padding: 4px;
    color: rgb(68, 61, 61);
    cursor: pointer;
    border-radius: 3px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    font-size: 14px;
    font-weight: 550;

    border: 2px solid ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null
    };

    background-color: ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null
    };

    &:hover {
        color: rgb(68, 61, 61);
        border: 2px solid ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null};
        background-color: white;
    }
`;

export const ButtonSwitch = styled.button`
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
