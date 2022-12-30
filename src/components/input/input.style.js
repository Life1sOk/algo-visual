import styled from 'styled-components';

export const TitleInputContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3px;

    span {
        font-size: 13px;
        margin-left: 3px;
    }
`;

export const TitleInput = styled.input`
    color: white;
    padding: 3px;
    font-size: 14px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: rgba(0,0,0, .2);
    border: 1px solid rgba(192,192,192, .2);

    &:focus {
        outline: none;
        border: 1px solid rgb(77,77,255);
    }
`;