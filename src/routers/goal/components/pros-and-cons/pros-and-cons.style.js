import styled from "styled-components";

export const ProsAndConsContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

export const ProsMark = styled.span`
    width: 12px;
    color: ${({type}) => (
        type === 'Pros' ? 'rgb(0,255,0)' :
        type === 'Cons' ? 'rgb(255,0,0)' :
        type === 'Tools' ? 'rgb(255,255,0)' : 'black'
    )};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputLine = styled.input`
    color: white;
    padding: 3px;
    font-size: 14px;
    font-style: italic;
    resize: none;
    border-radius: 5px;
    background-color: rgba(0,0,0,.2);
    border: 1px solid rgba(192,192,192,.2);

    &:focus {
        outline: none;
        border: 1px solid rgb(77,77,255);
    }
`;