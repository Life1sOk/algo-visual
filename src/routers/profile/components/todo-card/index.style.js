import styled from 'styled-components';

const TodoCardStyle = styled.div`
    position: relative;
    /* width: 272px; */
    height: auto;
    width: 100%;
    /* height: 400px; */
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

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 33px;
    text-align: center;
    border-radius: 0 0 20px 20px;
    background-color: ${props => props.color};
    padding: 0 10px;
    margin-top: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

TodoCardStyle.Title = TodoCardTitle;
TodoCardStyle.Bar = ProgressBarContainer;

export default TodoCardStyle;