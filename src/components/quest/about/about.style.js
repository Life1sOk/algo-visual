import styled from 'styled-components';

const AboutStyle = styled.div`
    width: 300px;
    height: 345px;
    color: white;
    flex-shrink: 0;
    background-color: rgb(20, 25, 50);
    padding: 0 15px 15px 15px;
    border-top: 3px solid white;
    border-bottom: 1px solid white;
    border-radius: 20px 20px 10px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .progress {
        width: 100%;
        text-align: center;
        margin: 7px auto 0 auto;
    }
`;

const Title = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .quest-id {
        position: absolute;
        top: 0px;
        left: -5px;

        width: 30px;
        height: 30px;
        font-size: 17px;
        background-color: red;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-title {
        font-size: 24px;
    }
`;

const RoadLinks = styled.div`
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: rgb(255, 98, 0);
    padding: 10px 5px 0 5px;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
`;

AboutStyle.Title = Title;
AboutStyle.RoadLinks = RoadLinks;

export default AboutStyle;