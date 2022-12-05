import styled from 'styled-components';

const PartStyle = styled.div`
    /* width: 100%; */
    width: 290px;
    height: 151px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(255,255,255, .1);
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Title = styled.div`
    width: 100%;
    font-size: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`;

const TotalQuests = styled.div`
    width: 100%;
    font-size: 14px;

    .totalquest {
        margin-left: 10px;
        font-size: 16px;
        color: rgb(0,255,0);
    }
`;

const Description = styled.div`
    width: 100%;
    height: 71px;
    font-size: 14px;
    font-style: italic;
    overflow: scroll;
    padding-right: 5px;
    border-right: 1px solid white;
`;

PartStyle.Title = Title;
PartStyle.TotalQuests = TotalQuests;
PartStyle.Description = Description;

export default PartStyle;