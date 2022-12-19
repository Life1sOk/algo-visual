import styled from 'styled-components';

const PointsStyle = styled.div`
    display: flex;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`; 

const Points = styled.div`
    width: 249.5px;
    height: 315px;
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 17px;

    overflow: scroll;
`;

const Balls = styled.div`
    width: 35px;
    height: 100%;
    padding-top: 10px;

    display: flex;
    flex-direction: column;
`;

const PointBall = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.status ? 'green' : 'blue'};
    color: white;
    padding: 10px;
    border-radius: 50%;
    margin: 10px 5px 0 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

PointsStyle.Points = Points;
PointsStyle.Balls = Balls;
PointsStyle.PointBall = PointBall;

export default PointsStyle;