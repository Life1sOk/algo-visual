import styled from 'styled-components';

const LineStyle = styled.div`
    width: 100%;
    margin-top: 25px;

    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-size: 16px;
    font-weight: 900;
`;

const Description = styled.span`
    font-style: italic;
    font-size: 14px;
`;

LineStyle.Label = Label;
LineStyle.Description = Description;

export default LineStyle;