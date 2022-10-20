import styled from 'styled-components';

export const TitleInputContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TitleInput = styled.input`
    padding: 5px;
    font-size: 18.73px;
    border: none;
    margin-bottom: 5px;
    background-color: rgba(255,255,255, .5);

    &:focus {
        outline: none;
    }
`;