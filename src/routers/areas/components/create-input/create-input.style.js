import styled from 'styled-components';

export const CreateInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 5px;
`;

export const TextArea = styled.textarea`
    width: 80%;
    height: ${props => `${props.fixedHeight}px`};
    padding: 5px;
    font-size: 17px;
    font-style: italic;
    opacity: .7;
    resize: none;
    border: none;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`;