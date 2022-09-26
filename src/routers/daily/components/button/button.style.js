import styled from 'styled-components';

export const ButtonStyle = styled.button`
    min-width: 50px;
    padding: 4px;
    color: rgb(68, 61, 61);
    cursor: pointer;
    border-radius: 3px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    font-size: 14px;
    font-weight: 600;

    border: 2px solid ${({ type }) =>
        type === 'green' ? 'rgb(51, 255, 51)' :
            type === 'yellow' ? 'rgb(255, 255, 51)' :
                type === 'red' ? 'rgb(255, 51, 51)' : null
    };

    background-color: ${({ type }) =>
        type === 'green' ? 'rgb(51, 255, 51)' :
            type === 'yellow' ? 'rgb(255, 255, 51)' :
                type === 'red' ? 'rgb(255, 51, 51)' : null
    };

    &:hover {
        color: rgb(68, 61, 61);
        border: 2px solid ${({ type }) =>
        type === 'green' ? 'rgb(51, 255, 51)' :
            type === 'yellow' ? 'rgb(255, 255, 51)' :
                type === 'red' ? 'rgb(255, 51, 51)' : null};
        background-color: white;
    }
`;