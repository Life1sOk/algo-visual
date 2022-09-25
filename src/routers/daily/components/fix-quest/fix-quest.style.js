import styled from 'styled-components';

export const FixQuestContainer = styled.div`
    position: relative;
    border: 1px solid rgb(224, 62, 26);
    margin: 25px 10px 10px 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
`;

export const FixLabel = styled.label`
    color: white;
    padding: 4px 17px;
    margin-left: 10px;
    font-size: 14px;
    width: fit-content;
    background-color: rgb(224, 62, 26);

    position: absolute;
    right: -1px;
    top: -20px;
`;

export const TitleInput = styled.input`
    padding: 5px;
    font-size: 18.73px;
    border: none;
    margin-bottom: 5px;

`;

export const TextInput = styled.textarea`
    padding: 5px;
    font-size: 16px;
    font-style: italic;
    opacity: .7;
    min-height: 110px;
    resize: none;
    border: none;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`;

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    margin-top: 10px;
    min-height: 28px;

`;