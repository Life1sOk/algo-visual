import styled from 'styled-components';

const Window = styled.div`
    /* width: 755px; */
    /* height: 400px; */
    padding: 20px;
    border-radius: 20px;
    background-color: grey;

    display: flex;
    gap: 60px;
`;

const Title = styled.h3`
    width: 100%;
    text-align: center;
`;

const Add = styled.div`
    width: 265px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Existing = styled.div`
    /* width: 285px; */
    /* height: 100%; */
`;

Window.Title = Title;
Window.Add = Add;
Window.Existing = Existing;

export default Window;