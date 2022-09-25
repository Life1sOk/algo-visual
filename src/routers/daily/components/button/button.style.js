import styled from 'styled-components';

export const ButtonStyle = styled.button`
    padding: 4px;
    color: rgb(68, 61, 61);
    cursor: pointer;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 3px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    font-size: 14px;
    font-weight: 600;

    background-color: ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null
    };

    &:hover {
        color: ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null
    };
        border: 2px solid ${({ color }) =>
        color === 'green' ? 'rgb(51, 255, 51)' :
            color === 'yellow' ? 'rgb(255, 255, 51)' :
                color === 'red' ? 'rgb(255, 51, 51)' : null
    };
        background-color: rgb(68, 61, 61);
    }
`;