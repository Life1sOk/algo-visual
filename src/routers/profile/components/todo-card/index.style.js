import styled from 'styled-components';

const TodoCardStyle = styled.div`
    position: relative;
    width: 272px;
    height: auto;
    background-color: white;
    border-radius: 25px;
`;

const TodoCardTitle = styled.h3`
    border-radius: 20px 20px 0 0;
    background-color: ${props => props.color};
    height: 40px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const NothingInHere = styled.div`
    width: 100%;
    height: 200px;
    background-color: grey;
    border: 1px solid white;
    font-style: italic;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProgressBar = styled.div`
    text-align: center;
    border-radius: 0 0 20px 20px;

    margin: 10px 0;
`;

TodoCardStyle.Title = TodoCardTitle;
TodoCardStyle.NothingInHere = NothingInHere;
TodoCardStyle.Bar = ProgressBar;

export default TodoCardStyle;