import styled from 'styled-components';

export const Hat = styled.div`
    width: 100%;
    padding: 0 7px 5px 7px;
    color: white;

    display: flex;
    justify-content: space-between;

    .setting {
        font-size: 14px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 25px;
    /* padding: 0 30px; */
    border-top: 2px solid grey;
    /* margin-bottom: 25px; */
    border-radius: 10px;
`;

export const HatChildren = styled.div`
    display: flex;
    gap: 10px;
`;