import styled from 'styled-components';

const AboutStyle = styled.div`
    width: 300px;
    height: 345px;
    flex-shrink: 0;
    background-color: rgb(20, 25, 50);
    padding: 0 15px 15px 15px;
    border-top: 3px solid white;
    border-bottom: 1px solid white;
    border-radius: 20px 20px 10px 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    .quest-id {
        width: 30px;
        height: 30px;
        font-size: 17px;
        background-color: red;
        border-radius: 50%;
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-title {
        font-size: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

const RoadLinks = styled.div`
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: rgb(255, 98, 0);
    padding: 10px 5px 0 5px;
    font-size: 13px;

    display: flex;
    justify-content: space-between;
`;

AboutStyle.Title = Title;
AboutStyle.RoadLinks = RoadLinks;
AboutStyle.AboutWrapper = AboutWrapper;

export default AboutStyle;