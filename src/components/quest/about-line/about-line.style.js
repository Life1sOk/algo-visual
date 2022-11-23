import styled from 'styled-components';

const LineStyle = styled.div`
    width: 100%;
    font-size: 15px;

    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-size: 17px;
    font-weight: 900;
`;

const Description = styled.span`
    font-style: italic;
`;

LineStyle.Label = Label;
LineStyle.Description = Description;

export default LineStyle;